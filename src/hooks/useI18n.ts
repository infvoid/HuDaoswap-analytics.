import { useCallback } from 'react'
import { getTranslation } from './translateTextHelpers'
import { useLanguage } from '../contexts/LocalStorage'

const useI18n = () => {
  const [selectedLanguage] = useLanguage()
  /**
   * As a temporary fix memoize the translation function so it can be used in an effect.
   * It appears the TranslationsContext is always empty and is not currently used
   * TODO: Figure out if the context is used and if not, remove it.
   */
  return useCallback(
    /**
     *
     * @param fallback 语言包的value
     * @returns
     */
    (allback: string) => {
      /* if (translations[0] === 'error') {
        return fallback
      } */
      // if (translations.length > 0) {
      return getTranslation(selectedLanguage.src, allback)
      /*  }
      return fallback */
    },
    [selectedLanguage]
  )
}

export default useI18n
