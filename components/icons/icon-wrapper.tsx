import type { ComponentType } from 'react';

interface IconProps {
  className?: string;
  size?: 'small' | 'medium';
  // Added minWidth and minHeight as optional props
  minWidth?: number;
  minHeight?: number;
}

interface AtlaskitIconProps {
  size?: 'small' | 'medium';
  color?: string;
}

export function IconWrapper<T extends AtlaskitIconProps>(
  IconComponent: ComponentType<T>
) {
  return function WrappedIcon({
    className = 'w-5 h-5',
    size = 'medium',
    minWidth,
    minHeight,
    ...iconProps
  }: IconProps & T) {
    // Set defaults based on size if not explicitly provided
    const defaultMinWidth = minWidth ?? (size === 'small' ? 12 : 16);
    const defaultMinHeight = minHeight ?? (size === 'small' ? 12 : 16);

    return (
      <div className={`flex items-center justify-center ${className}`}>
        {/* Use the calculated min dimensions */}
        <div
          style={{
            width: `${defaultMinWidth}px`,
            height: `${defaultMinHeight}px`,
          }}
        >
          <IconComponent
            size={size}
            color="currentColor"
            {...(iconProps as T)}
          />
        </div>
      </div>
    );
  };
}
