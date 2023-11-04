/* eslint-disable space-before-function-paren */
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Link
} from '@nextui-org/react'

export default function Version() {
  return (
    <Dropdown
      classNames={{
        base: 'before:bg-default-200',
        content:
          'py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black'
      }}
    >
      <DropdownTrigger>
        <Button
          variant='flat'
          color='secondary'
          className='text-white font-semibold text-lg'
        >
          Version
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label='Static Actions'>
        <DropdownItem key='version1'>
          <Link
            isExternal
            href='https://v1.fabianhmz.dev/'
            showAnchorIcon
            className='text-black dark:text-white w-full'
          >
            v1.0
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
