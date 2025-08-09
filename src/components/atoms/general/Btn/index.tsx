import type { FC, JSX, ReactNode } from 'react'

import styles from './Btn.module.css'

type BtnProps = {
   children: ReactNode // 🧩 Content inside the button (text, icon, etc.)
   onClick?: () => void // 🖱️ Optional click handler
   variant?: 'primary' | 'secondary' | 'danger' // 🎨 Visual style variant
   disabled?: boolean // 🚫 Whether the button is disabled
   className?: string // 🎀 Extra CSS classes for styling
}

export const Btn: FC<BtnProps> = ({
   children,
   onClick,
   variant = 'primary',
   disabled,
   className,
}: BtnProps): JSX.Element => {
   return (
      <button
         className={`${styles.btn ?? ''} ${styles[variant] ?? ''} ${className ?? ''}`.trim()}
         disabled={disabled}
         onClick={onClick}
      >
         {children}
      </button>
   )
}
