import * as React from 'react';
interface CreateSection {
  sectionName: string;
  description?: string;
  displayTitle: string;
  className?: string;
}
type sectionChild = (props: CreateSection | any) => React.ReactElement;

interface SectionProps {
  children?: React.ReactChildren | sectionChild | JSX.Element;
  headingStyle?: React.CSSProperties;
  subHeadingStyle?: React.CSSProperties;
}

export const createSection = ({ sectionName, className, description, displayTitle, ...rest }: CreateSection) => ({
  children,
  headingStyle,
  subHeadingStyle,
}: SectionProps) => (
  <section id={sectionName} className={`s-${className ? className : sectionName} target-section`}>
    <div className="row section-header">
      <div className="col-full">
        <h1 className="display-1" style={headingStyle}>
          {displayTitle}
        </h1>
        {description && (
          <p style={subHeadingStyle} className="lead">
            {description}
          </p>
        )}
      </div>
    </div>
    {typeof children === 'function' ? children(rest) : children}
  </section>
);

export const ServiceItem = ({ icon, title, children }) => (
  <div className="col-block item-feature">
    <div className="item-feature__icon">
      <i className={icon} />
    </div>
    <div className="item-feature__text">
      <h3 className="item-title">{title}</h3>
      <p>{children}</p>
    </div>
  </div>
);
