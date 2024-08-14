import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export function MySkeleton({ styles, ...props }) {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Skeleton
        width="100%"
        height="100%"
        duration={2}
        style={{ position: 'absolute', top: 0, objectFit: 'cover', opacity: 0.7 }}
        {...props}
        className={styles}
      />
    </SkeletonTheme>
  );
}