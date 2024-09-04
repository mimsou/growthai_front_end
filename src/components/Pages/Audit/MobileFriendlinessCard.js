
import React from 'react';

const MobileFriendlinessCard = ({ result }) => {
  return (
    <div className="bg-white rounded shadow p-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">Mobile Friendliness Report</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className={`text-gray-600 mb-1 ${result.report.hasViewportSetting ? 'text-green-500' : 'text-red-500'}`}>
            <strong>Viewport Setting:</strong> {result.report.hasViewportSetting ? 'Present' : 'Missing'}
          </p>
          <p className={`text-gray-600 mb-1 ${result.report.isResponsiveDesign ? 'text-green-500' : 'text-red-500'}`}>
            <strong>Responsive Design:</strong> {result.report.isResponsiveDesign ? 'Yes' : 'No'}
          </p>
          <p className={`text-gray-600 mb-1 ${result.report.hasTouchElements ? 'text-green-500' : 'text-red-500'}`}>
            <strong>Touch Elements:</strong> {result.report.hasTouchElements ? 'Yes' : 'No'}
          </p>
        </div>
        <div>
          <p className={`text-gray-600 mb-1 ${result.report.isFontSizeReadable ? 'text-green-500' : 'text-red-500'}`}>
            <strong>Font Size Readable:</strong> {result.report.isFontSizeReadable ? 'Yes' : 'No'}
          </p>
          <p className={`text-gray-600 mb-1 ${result.report.hasTapTargets ? 'text-green-500' : 'text-red-500'}`}>
            <strong>Tap Targets:</strong> {result.report.hasTapTargets ? 'Yes' : 'No'}
          </p>
          <p className={`text-gray-600 mb-1 ${result.report.hasMobileMediaQueries ? 'text-green-500' : 'text-red-500'}`}>
            <strong>Mobile Media Queries:</strong> {result.report.hasMobileMediaQueries ? 'Yes' : 'No'}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <p className={`text-gray-600 mb-1 ${result.hasImageOptimization ? 'text-green-500' : 'text-red-500'}`}>
          <strong>Image Optimization:</strong> {result.hasImageOptimization ? 'Yes' : 'No'}
        </p>
        <p className={`text-gray-600 mb-1 ${result.report.hasTouchGestureSupport ? 'text-green-500' : 'text-red-500'}`}>
          <strong>Touch Gesture Support:</strong> {result.report.hasTouchGestureSupport ? 'Yes' : 'No'}
        </p>
        <p className="text-gray-600 mb-1"><strong>Content Width:</strong> {result.contentWidth}px</p>
      </div>
    </div>
  );
};

export default MobileFriendlinessCard;