import { CareerTrack } from '../data/portfolio'
import { useCareerTrack } from '../context/CareerTrackContext'
import { motion } from 'framer-motion'
import styles from './CareerTrackSwitcher.module.css'

const TRACK_OPTIONS = [
  {
    value: CareerTrack.AI_ENGINEER,
    label: 'AI Engineer',
    description: 'LLMs, RAG, agents, and production automation',
  },
  {
    value: CareerTrack.SALESFORCE_CONSULTANT,
    label: 'Salesforce Consultant',
    description: 'Salesforce platform, automation, and integrations',
  },
  {
    value: CareerTrack.FULL_STACK,
    label: 'Full Stack',
    description: 'Complete systems across AI, Salesforce, and backend',
  },
]

export default function CareerTrackSwitcher() {
  const { activeTrack, setActiveTrack } = useCareerTrack()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.label}>Career Track</div>
        <div className={styles.switcher}>
          {TRACK_OPTIONS.map((option) => {
            const isActive = activeTrack === option.value
            return (
              <motion.button
                key={option.value}
                onClick={() => setActiveTrack(option.value)}
                className={`${styles.option} ${isActive ? styles.active : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-pressed={isActive}
              >
                <div className={styles.optionLabel}>{option.label}</div>
                {isActive && (
                  <motion.div
                    className={styles.indicator}
                    layoutId="track-indicator"
                    transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                  />
                )}
              </motion.button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
