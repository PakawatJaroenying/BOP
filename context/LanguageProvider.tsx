'use client'
import React, {
	createContext,
	useReducer,
	useContext,
	ReactNode,
} from "react";

interface LanguageContextType {
	language: string;
	switchLanguage: () => void;
}

export enum Language {
	EN = "en",
	TH = "th",
}

interface LanguageState {
	language: Language;
}

interface LanguageAction {
	type: "SET_LANGUAGE";
	payload: Language;
}


const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
);

const languageReducer = (
	state: LanguageState,
	action: LanguageAction
): LanguageState => {
	switch (action.type) {
		case "SET_LANGUAGE":
			return { ...state, language: action.payload };
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};

// สร้างประเภทสำหรับ props ของ LanguageProvider
interface LanguageProviderProps {
	children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
	const [state, dispatch] = useReducer(languageReducer, {
		language: localStorage.getItem("language") ? localStorage.getItem("language") as Language : Language.EN,
	});

	const switchLanguage = () => {
        localStorage.setItem("language", state.language === Language.EN ? Language.TH : Language.EN);
		dispatch({ type: "SET_LANGUAGE", payload: state.language === Language.EN ? Language.TH : Language.EN });
	};


	return (
		<LanguageContext.Provider
			value={{ language: state.language, switchLanguage }}
		>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = (): LanguageContextType => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};
