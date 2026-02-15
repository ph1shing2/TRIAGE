import { useState } from 'react';
import { Language, useTranslation } from '../utils/translations';

export interface VisitorData {
  city: string;
  groupSize: number;
  duration: number;
  interests: string[];
  specialNeeds: string[];
  timeConstraints: string;
}

interface IntakeFormProps {
  language: Language;
  onSubmit: (data: VisitorData) => void;
  onBack: () => void;
}

const cities = ['tirane', 'shkoder', 'berat', 'gjirokaster', 'sarande', 'vlore', 'durres', 'korce'];
const interestOptions = ['history', 'culture', 'nature', 'food', 'adventure', 'relaxation', 'photography', 'shopping'];
const specialNeedsOptions = ['accessibility', 'childFriendly', 'petFriendly', 'dietary'];
const timeConstraintsOptions = ['morning', 'afternoon', 'evening', 'flexible'];

export function IntakeForm({ language, onSubmit, onBack }: IntakeFormProps) {
  const { t } = useTranslation(language);

  const [formData, setFormData] = useState<VisitorData>({
    city: '',
    groupSize: 2,
    duration: 4,
    interests: [],
    specialNeeds: [],
    timeConstraints: 'flexible',
  });

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSpecialNeedToggle = (need: string) => {
    setFormData(prev => ({
      ...prev,
      specialNeeds: prev.specialNeeds.includes(need)
        ? prev.specialNeeds.filter(n => n !== need)
        : [...prev.specialNeeds, need],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.city && formData.interests.length > 0) {
      onSubmit(formData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            {t.intake.title}
          </h2>
          <p className="text-gray-600 mb-8">
            {t.intake.subtitle}
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                {t.intake.city}
              </label>
              <select
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                required
              >
                <option value="">{t.intake.city}</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {t.intake.cities[city as keyof typeof t.intake.cities]}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  {t.intake.groupSize}
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={formData.groupSize}
                  onChange={(e) => setFormData({ ...formData, groupSize: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  {t.intake.duration} ({t.intake.hours})
                </label>
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                {t.intake.interests}
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {interestOptions.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestToggle(interest)}
                    className={`px-4 py-3 rounded-lg font-medium transition-all ${
                      formData.interests.includes(interest)
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {t.intake.interestOptions[interest as keyof typeof t.intake.interestOptions]}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                {t.intake.specialNeeds}
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {specialNeedsOptions.map((need) => (
                  <button
                    key={need}
                    type="button"
                    onClick={() => handleSpecialNeedToggle(need)}
                    className={`px-4 py-3 rounded-lg font-medium transition-all ${
                      formData.specialNeeds.includes(need)
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {t.intake.specialNeedsOptions[need as keyof typeof t.intake.specialNeedsOptions]}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                {t.intake.timeConstraints}
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {timeConstraintsOptions.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setFormData({ ...formData, timeConstraints: time })}
                    className={`px-4 py-3 rounded-lg font-medium transition-all ${
                      formData.timeConstraints === time
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {t.intake.timeConstraintsOptions[time as keyof typeof t.intake.timeConstraintsOptions]}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <button
                type="button"
                onClick={onBack}
                className="flex-1 px-6 py-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-xl transition-all"
              >
                {t.intake.backButton}
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!formData.city || formData.interests.length === 0}
              >
                {t.intake.submitButton}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
