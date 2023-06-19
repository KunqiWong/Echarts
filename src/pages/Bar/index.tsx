/**
 * 柱状图
 */
import React, { useEffect } from 'react'
import { useGlobalContext } from '@/hooks/useGlobalContext'
import Bar1 from './components/Bar1'
import Bar2 from './components/Bar2'
import Bar3 from './components/Bar3'
import Bar4 from './components/Bar4'
import styles from './index.module.scss'

const gridboxList = [
  { element: <Bar1 /> },
  { element: <Bar2 /> },
  { element: <Bar3 /> },
  { element: <Bar4 /> },
]

const Bar = () => {
  const { setScrollTop } = useGlobalContext()

  useEffect(() => {
    setScrollTop(0)
  }, [])

  return (
    <div className={styles.container}>
      {gridboxList.map((item: { element: React.ReactNode }, index: number) => (
        <div key={index} className={styles.box}>
          {item.element}
        </div>
      ))}
    </div>
  )
}

export default Bar
