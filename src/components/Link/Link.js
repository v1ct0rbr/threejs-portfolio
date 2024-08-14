import { forwardRef } from 'react';
import { classes } from 'utils/style';
import styles from './Link.module.css';
import Link from 'next/link';

// File extensions that can be linked to
const VALID_EXT = ['txt', 'png', 'jpg'];

function isAnchor(href) {
  const isValidExtension = VALID_EXT.includes(href?.split('.').pop());
  return href?.includes('://') || href?.[0] === '#' || isValidExtension;
}

export const Link2 = forwardRef(({ href, ...rest }, ref) => {
  if (isAnchor(href)) {
    return <LinkContent href={href} ref={ref} {...rest} />;
  }

  return (
    
      <LinkContent ref={ref} {...rest} />
    
  );
});

export const LinkContent = forwardRef(
  ({ rel, target, children, secondary, className, href, ...rest }, ref) => {
    const isExternal = href?.includes('://');
    const relValue = rel || (isExternal ? 'noreferrer noopener' : undefined);
    const targetValue = target || (isExternal ? '_blank' : undefined);

    return (
      <Link passHref href={href} scroll={false}
        className={classes(styles.link, className)}
        data-secondary={secondary}
        rel={relValue}
       
        target={targetValue}
        ref={ref}
        {...rest}
      >
        {children}
      </Link>
    );
  }
);
