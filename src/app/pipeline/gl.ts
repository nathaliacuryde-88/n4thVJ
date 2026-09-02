/**
 * ═══════════════════════════════════════════════════════════════════════════
 * A SMALL WEBGL2 LAYER
 * ═══════════════════════════════════════════════════════════════════════════
 * Just enough to run fullscreen fragment shaders into ping-ponged textures.
 * Every pass is one triangle covering the screen, so there is no geometry, no
 * vertex buffer and no VAO — gl_VertexID generates the positions.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export interface RenderTarget {
  framebuffer: WebGLFramebuffer;
  texture: WebGLTexture;
  width: number;
  height: number;
}

const VERTEX_SHADER = `#version 300 es
out vec2 vUv;
void main() {
  // 0,0 / 2,0 / 0,2 — one oversized triangle, clipped to the viewport.
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;

export const FRAGMENT_HEADER = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
uniform vec2 uResolution;
uniform float uTime;
`;

function compile(gl: WebGL2RenderingContext, type: number, source: string): WebGLShader {
  const shader = gl.createShader(type);
  if (!shader) throw new Error('Could not create shader');
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    // Numbered source makes a GLSL error actually findable.
    const numbered = source
      .split('\n')
      .map((line, i) => `${String(i + 1).padStart(3)} | ${line}`)
      .join('\n');
    throw new Error(`Shader failed to compile: ${log}\n${numbered}`);
  }
  return shader;
}

/** Compile a fullscreen-quad program from a fragment body (FRAGMENT_HEADER is prepended). */
export function createProgram(gl: WebGL2RenderingContext, fragmentBody: string): WebGLProgram {
  const vs = compile(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
  const fs = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT_HEADER + fragmentBody);
  const program = gl.createProgram();
  if (!program) throw new Error('Could not create program');
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  gl.deleteShader(vs);
  gl.deleteShader(fs);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const log = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw new Error(`Program failed to link: ${log}`);
  }
  return program;
}

export function createTarget(gl: WebGL2RenderingContext, width: number, height: number): RenderTarget {
  const texture = gl.createTexture()!;
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  // Clamping is what gives feedback its smeared edges rather than a wrapped seam.
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

  const framebuffer = gl.createFramebuffer()!;
  gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);

  return { framebuffer, texture, width, height };
}

export function resizeTarget(gl: WebGL2RenderingContext, target: RenderTarget, width: number, height: number) {
  if (target.width === width && target.height === height) return;
  gl.bindTexture(gl.TEXTURE_2D, target.texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
  target.width = width;
  target.height = height;
}

export function deleteTarget(gl: WebGL2RenderingContext, target: RenderTarget) {
  gl.deleteFramebuffer(target.framebuffer);
  gl.deleteTexture(target.texture);
}

/** Draw the fullscreen triangle into `target`, or to the canvas when target is null. */
export function drawFullscreen(
  gl: WebGL2RenderingContext,
  target: RenderTarget | null,
  width: number,
  height: number,
) {
  gl.bindFramebuffer(gl.FRAMEBUFFER, target ? target.framebuffer : null);
  gl.viewport(0, 0, target ? target.width : width, target ? target.height : height);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}

/** Bind `texture` to a unit and point `name` at it. */
export function bindTexture(
  gl: WebGL2RenderingContext,
  program: WebGLProgram,
  name: string,
  texture: WebGLTexture,
  unit: number,
) {
  gl.activeTexture(gl.TEXTURE0 + unit);
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.uniform1i(gl.getUniformLocation(program, name), unit);
}
