import { FOnPressFunction } from "../..";

export interface FCountTimerProps {
	time?: number;
	defaultStart?: boolean;
	onCallback?: FOnPressFunction;
}
