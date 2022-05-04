import { FC } from 'react'
import { Button, Grid, Input } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form/lib/use-form'

export type SearchWord = {
  word: string
}

type SearchProps = {
  form: UseFormReturnType<SearchWord>
  handleSubmit: ({}: SearchWord) => void
}

export const Search: FC<SearchProps> = ({ form, handleSubmit }) => {
  return (
    <form
      onSubmit={form.onSubmit((values) => handleSubmit(values))}
    >
      <Grid>
        <Grid.Col className={'max-w-[80%]'}>
          <Input
            placeholder={'Search...'}
            rightSection={
              <button
                type={'reset'}
                onClick={async () => {
                  form.reset()
                  await handleSubmit({ word: '' })
                }}
                className={'hover:bg-transparent opacity-30 hover:opacity-100 text-slate-700 bg-white'}
              >✖︎</button>
            }
            {...form.getInputProps('word')}
          />
        </Grid.Col>
        <Grid.Col className={'max-w-[20%]'}>
          <Button
            type={'submit'}
            variant="gradient"
            color={'dark'}
            fullWidth
            className={"text-cyan-300 border-solid border-cyan-200 border-[1px] rounded hover:border-cyan-500 hover:text-cyan-500 bg-white"}
          >
            Search
          </Button>
        </Grid.Col>
      </Grid>
    </form>
  )
}