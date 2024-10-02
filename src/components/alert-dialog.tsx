'use client'

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { ComponentProps } from 'react'

interface AlertDialogProps extends ComponentProps<'button'> {
  title: string
  description: string
  onConfirm: () => void
}

export const AlertDialog = ({ title, description, onConfirm, ...rest }: AlertDialogProps) => {
  return (
    <AlertDialogPrimitive.Root>
      <AlertDialogPrimitive.Trigger asChild>
        <button className="mt-8 w-full rounded-md bg-green-400 p-4 text-neutral-600" {...rest}>Prosseguir</button>
      </AlertDialogPrimitive.Trigger>

      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-40 bg-black/80" />

        <AlertDialogPrimitive.Content className='dark:bg-darkMode fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-lg focus:outline-none'>
          <AlertDialogPrimitive.Title className='mb-4 font-bold text-neutral-800 dark:text-neutral-400'>{title}</AlertDialogPrimitive.Title>
          <AlertDialogPrimitive.Description className='text-sm text-neutral-600 dark:text-neutral-500'>
            {description}
          </AlertDialogPrimitive.Description>

          <div className='mt-4 flex items-center justify-end gap-2 max-[393px]:flex-col'>
            <AlertDialogPrimitive.Cancel asChild>
              <button className='rounded-lg bg-red-500 py-2 text-white max-[393px]:w-full'>
                Cancelar
              </button>
            </AlertDialogPrimitive.Cancel>

            <AlertDialogPrimitive.Action asChild>
              <button
                onClick={() => onConfirm()}
                className='rounded-lg bg-green-500 py-2 text-white max-[393px]:w-full'
              >
                Confirmar
              </button>
            </AlertDialogPrimitive.Action>
          </div>
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  )
}