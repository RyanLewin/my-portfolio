import * as React from "react";
import { Accordion } from "radix-ui";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { cn } from "./ui/utils";
import "../app/styles/accordionstyle.css"

export type AccordionItemData = {
	id: string;
	triggerText: string;
	contentText: React.ReactNode; // Allows both raw strings and JSX elements
};

// 2. Define the props for the root custom component
interface AccordionCustomProps {
	items: AccordionItemData[];
    className: string
}

const AccordionCustom = ({ className, items }: AccordionCustomProps) => (
	<Accordion.Root 
		className={cn("w-75 rounded-md flex flex-col gap-3", className)}
		type="single"
		// defaultValue="item-1"
		collapsible
	>
        {items.map((item) => (
            <AccordionItem value={item.id} key={item.id} className="bg-tint-bg shadow-[0_2px_10px] shadow-black/5 ">
                <AccordionTrigger>{item.triggerText}</AccordionTrigger>
                <AccordionContent className="AccordionContent">{item.contentText}</AccordionContent>
            </AccordionItem>

        ))}
	</Accordion.Root>
);

function AccordionItem({ 
	children, 
	className, 
	...props 
}: React.ComponentProps<typeof Accordion.Item>) {
	return (
		<Accordion.Item
			className={cn(
				"mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px] focus-within:shadow-mauve12",
				className,
			)}
			{...props}
		>
			{children}
		</Accordion.Item>
	);
}

function AccordionTrigger({ 
	children, 
	className, 
	...props 
}: React.ComponentProps<typeof Accordion.Trigger>) {
	return (
		<Accordion.Header className="flex">
			<Accordion.Trigger
				className={cn(
					"group flex h-11.25 flex-1 cursor-default items-center justify-between bg-mauve1 px-5 text-[15px] leading-none text-violet11 shadow-[0_1px_0] shadow-mauve6 outline-none hover:bg-mauve2",
					className,
				)}
				{...props}
			>
				{children}
				<ChevronDownIcon
					className="text-violet10 transition-transform duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] group-data-[state=open]:rotate-180"
					aria-hidden
				/>
			</Accordion.Trigger>
		</Accordion.Header>
	);
}

function AccordionContent({ 
	children, 
	className, 
	...props 
}: React.ComponentProps<typeof Accordion.Content>) {
	return (
		<Accordion.Content
			className={cn(
				"overflow-hidden bg-mauve2 text-[15px] text-mauve11 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
				className,
			)}
			{...props}
		>
			<div className="px-5 py-3.75">{children}</div>
		</Accordion.Content>
	);
}

export default AccordionCustom;
