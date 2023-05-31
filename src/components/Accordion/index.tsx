import { type HTMLProps, useState, useId, Children, cloneElement } from "react";
import { ReactComponent as ChevronDown } from "~/assets/chevron-down.svg";

type AccordionRootType = HTMLProps<HTMLDivElement> & {
  type?: "single" | "multiple";
  collapsible?: boolean;
  defaultFirstOpen?: boolean;
};

const Root = ({
  children,
  type = "single",
  collapsible = false,
  ...restProps
}: AccordionRootType) => {
  if (type === "single")
    return (
      <SingleRoot collapsible={collapsible} {...restProps}>
        {children}
      </SingleRoot>
    );

  return <MultiRoot {...restProps}>{children}</MultiRoot>;
};

const SingleRoot = ({
  children,
  collapsible,
  defaultFirstOpen = false,
  className,
  ...restProps
}: Omit<AccordionRootType, "type">) => {
  const accId = useId();
  const [itemOpen, setItemOpen] = useState(
    `${accId}-${defaultFirstOpen ? 0 : "None"}`
  );
  const handleSingleItemOpen = (itemId: string) =>
    collapsible
      ? setItemOpen((o) => (o === itemId ? `${accId}-None` : itemId))
      : setItemOpen(itemId);

  return (
    <div className={"stack " + className} {...restProps}>
      {Children.map(children, (child, idx) =>
        cloneElement(
          child as React.DetailedReactHTMLElement<
            AccordionItemType,
            HTMLElement
          >,
          {
            open: itemOpen === `${accId}-${idx}`,
            toggle: () => handleSingleItemOpen(`${accId}-${idx}`),
          }
        )
      )}
    </div>
  );
};

const MultiRoot = ({
  children,
  className,
  defaultFirstOpen = false,
  ...restProps
}: Omit<AccordionRootType, "type" | "collapsible">) => {
  const [multipleItemOpen, setMultipleItemOpen] = useState(
    Children.toArray(children).map((_, idx) => defaultFirstOpen && idx === 0)
  );
  const handleMultipleItemOpen = (itemIndex: number) =>
    setMultipleItemOpen((o) =>
      o.map((isOpen, idx) => (idx === itemIndex ? !isOpen : isOpen))
    );

  return (
    <div className={"stack " + className} {...restProps}>
      {Children.map(children, (child, idx) =>
        cloneElement(
          child as React.DetailedReactHTMLElement<
            AccordionItemType,
            HTMLElement
          >,
          {
            open: multipleItemOpen[idx],
            toggle: () => handleMultipleItemOpen(idx),
          }
        )
      )}
    </div>
  );
};

type AccordionItemType = HTMLProps<HTMLDivElement> & {
  heading: React.ReactNode;
  open?: boolean;
  toggle?: () => void;
};

const AccordionItem = ({
  heading,
  children,
  open,
  toggle,
  className,

  ...restProps
}: AccordionItemType) => {
  return (
    <div
      className={"accordion" + (open ? " open " : " ") + className}
      {...restProps}
    >
      <header className="header" onClick={toggle}>
        <div>{heading}</div>
        <ChevronDown className="icon" />
      </header>
      <div className="content">{children}</div>
    </div>
  );
};

export const Accordion = {
  Root,
  Item: AccordionItem,
};
