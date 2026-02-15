interface LanguageSelectionProps {
  onLanguageSelect: (language: string) => void;
}

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'sq', name: 'Albanian', nativeName: 'Shqip', flag: '🇦🇱' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
];

export function LanguageSelection({ onLanguageSelect }: LanguageSelectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Select Your Language
          </h1>
          <p className="text-xl text-gray-600">
            Zgjidhni gjuhën tuaj • Choose your language • Scegli la tua lingua
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => onLanguageSelect(language.code)}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-8 border-2 border-transparent hover:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <div className="text-6xl mb-4">{language.flag}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {language.nativeName}
              </h3>
              <p className="text-sm text-gray-500">{language.name}</p>
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Tourism Routing & Intelligent Allocation Guidance Engine
          </p>
        </div>
      </div>
    </div>
  );
}
