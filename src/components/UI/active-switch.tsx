'use client'

import * as Switch from '@radix-ui/react-switch'
import { LockIcon, LockOpenIcon } from 'lucide-react'
import { useState } from 'react'

export const ActiveSwitch = () => {
  const [isLock, setisLock] = useState(false)

  return (
    <div className='m-auto mb-4 flex flex-col items-center justify-center gap-2'>
      <span className="text-center text-xl font-medium text-neutral-600">{!isLock ? 'Desbloqueado' : 'Bloqueado'}</span>

      <Switch.Root
        id="switch-lock"
        onClick={() => setisLock((state) => !state)}
        className="relative h-[2.4rem] w-[6.5rem] cursor-default rounded-full bg-green-500 shadow-md outline-none data-[state=checked]:bg-red-500"
      >
        <Switch.Thumb className="group flex h-[2.1rem] w-[2.1rem] translate-x-[0.20rem] items-center justify-center rounded-full bg-zinc-100 transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[69px] data-[state=checked]:bg-zinc-100">
          {!isLock ? <LockOpenIcon /> : <LockIcon />}
        </Switch.Thumb>
      </Switch.Root>
    </div>
  )
}