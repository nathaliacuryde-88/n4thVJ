import { Camera, Hand } from 'lucide-react';

interface PermissionRequestProps {
  onGrant: () => void;
  onSkip: () => void;
}

export function PermissionRequest({ onGrant, onSkip }: PermissionRequestProps) {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center">
      <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-2xl p-8 max-w-md border border-white/20 shadow-2xl">
        <div className="text-center space-y-6">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-purple-600/30 rounded-full flex items-center justify-center">
              <Camera className="w-10 h-10 text-purple-300" />
            </div>
          </div>

          {/* Title */}
          <div>
            <h2 className="text-2xl text-white mb-2">Camera Access Required</h2>
            <p className="text-white/70 text-sm">
              This VJ app needs camera access to track your hand movements and gestures for interactive visual control.
            </p>
          </div>

          {/* Features */}
          <div className="bg-black/30 rounded-lg p-4 space-y-2 text-left">
            <div className="flex items-start gap-3">
              <Hand className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <div className="text-white/90">Hand Tracking</div>
                <div className="text-white/60 text-xs">Real-time gesture recognition</div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onSkip}
              className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
            >
              Skip
            </button>
            <button
              onClick={onGrant}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg transition-all font-medium"
            >
              Allow Access
            </button>
          </div>

          {/* Privacy Note */}
          <p className="text-white/50 text-xs">
            Your camera feed is processed locally on your device. No data is sent to external servers.
          </p>
        </div>
      </div>
    </div>
  );
}