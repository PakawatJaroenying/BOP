import { useEffect } from "react";
import { createContext, useReducer, ReactNode } from "react";

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

const languageReducer = (state: LanguageState, action: LanguageAction): LanguageState => {
	switch (action.type) {
		case "SET_LANGUAGE":
			return { ...state, language: action.payload };
		default:
			return state;
	}
};

interface LanguageProviderProps {
	children: ReactNode;
}

export const LanguageContext = createContext<{
	language: Language;
	switchLanguage: () => void;
} | undefined>(undefined);

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
	const [state, dispatch] = useReducer(languageReducer, {
		language: Language.EN, // Default to English initially
	});

	useEffect(() => {
        alert(typeof window !== "undefined")
		const initialLanguage =
			typeof window !== "undefined" && localStorage.getItem("language")
				? (localStorage.getItem("language") as Language)
				: Language.EN;

		dispatch({
			type: "SET_LANGUAGE",
			payload: initialLanguage,
		});
	}, []);

	const switchLanguage = () => {
		if (typeof window !== "undefined") {
			localStorage.setItem(
				"language",
				state.language === Language.EN ? Language.TH : Language.EN
			);
		}
		dispatch({
			type: "SET_LANGUAGE",
			payload: state.language === Language.EN ? Language.TH : Language.EN,
		});
	};

	return (
		<LanguageContext.Provider
			value={{ language: state.language, switchLanguage }}
		>
			{children}
		</LanguageContext.Provider>
	);
};
