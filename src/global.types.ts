export type FNullable<T> = T | null;

export type FOnPressFunction = () => void;

export type FOnSubmitFunction<T> =
	| ((data: T) => void)
	| ((data: T) => Promise<void>);

export type FOnDataCallbackFunction<T, C> = (
	data: T,
	callbackFunction: C
) => Promise<void>;

export type FOnCallBackFuntion<C> = (callbackFunction: C) => Promise<void>; 
