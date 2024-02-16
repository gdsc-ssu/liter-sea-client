/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { css } from "styled-components";

export const withBorderRadius = () => ({ borderRadius: "0.8rem" });

const FlexContainer = styled(
	({
		className,
		children,
		direction,
		justifyContent,
		alignItems,
		alignSelf,
		wrap,
		gap,
		margin,
		padding,
		isInline,
		fullWidth,
		grow,
		shrink,
		withBorder,
		style,
	}: {
		className?: string;
		children?: React.ReactNode;
		direction?: React.CSSProperties["flexDirection"];
		justifyContent?: React.CSSProperties["justifyContent"];
		alignItems?: React.CSSProperties["alignItems"];
		alignSelf?: React.CSSProperties["alignSelf"];
		wrap?: React.CSSProperties["flexWrap"];
		gap?: number;
		margin?: number | string;
		padding?: number;
		isInline?: boolean;
		fullWidth?: boolean;
		grow?: number;
		shrink?: number;
		withBorder?: boolean;
		style?: React.CSSProperties;
	}) => {
		return (
			<div className={className} style={style}>
				{children}
			</div>
		);
	}
)`
	display: ${(props) => (props.isInline ? "inline-flex" : "flex")};
	flex-direction: ${(props) => props.direction};
	justify-content: ${(props) => props.justifyContent};
	align-items: ${(props) => props.alignItems};
	align-self: ${(props) => props.alignSelf};
	flex-wrap: ${(props) => props.wrap};
	flex-grow: ${(props) => props.grow};
	flex-shrink: ${(props) => props.shrink};
	${(props) =>
		props.gap &&
		css`
			gap: ${props.gap}rem;
		`};
	${(props) =>
		props.padding &&
		css`
			padding: ${props.padding}rem;
		`};
	${(props) =>
		props.margin &&
		css`
			margin: ${props.margin}rem;
		`};
	${(props) =>
		props.fullWidth &&
		css`
			width: 100%;
		`}
	${(props) =>
		props.withBorder &&
		css`
			border-radius: 0.8rem;
		`}
`;

export default FlexContainer;

FlexContainer.defaultProps = {
	direction: "row",
	justifyContent: "flex-start",
	alignItems: "center",
	alignSelf: "stretch",
	wrap: "nowrap",
	gap: 1,
	padding: 0,
	margin: 0,
	isInline: false,
	fullWidth: false,
	grow: 0,
	withBorder: true,
};
