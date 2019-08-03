import { useLittera } from 'react-littera'

const createData = (name, cost, time) => ({ name, cost, time })

const translations = {
  service01: {
    pl_PL: 'Masaż całościowy',
    en_US: 'Whole massage',
  },
  service02: {
    pl_PL: 'Masaż częściowy',
    en_US: 'Partial massage',
  },
  service03: {
    pl_PL: 'Masaż + ćw. indywidualne',
    en_US: 'Massage + individual exercise',
  },
  service04: {
    pl_PL: 'Masaż bańką chińską',
    en_US: 'Chinese cupping massage',
  },
  service05: {
    pl_PL: 'ćw. indywidualne',
    en_US: 'individual exercises',
  },
  service06: {
    pl_PL: 'Fizykoterapia',
    en_US: 'Physiotherapy',
  },
  service07: {
    pl_PL: 'Taping',
    en_US: 'Taping',
  },
}

const usePrices = () => {
  const [translated] = useLittera(translations)

  return [
    createData(translated.service01, 70, 60),
    createData(translated.service02, 50, 50),
    createData(translated.service03, 70, 70),
    createData(translated.service04, 40, 40),
    createData(translated.service05, 60, 60),
    createData(translated.service06, 15, 10),
    createData(translated.service07, 30, 0),
  ]
}

export default usePrices
