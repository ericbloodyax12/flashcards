import { Table, TableBody, TableCell, TableEmpty, TableHead, TableHeadCell, TableRow } from './'
import { Meta } from '@storybook/react'
import Edit from '@/assets/icons/edit.tsx'
import Trash from '@/assets/icons/trash.tsx'
import Play from '@/assets/icons/play.tsx'

export default {
  component: Table,
  title: 'Components/Table',
} as Meta<typeof Table>

export const Default = {
  args: {
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell align={'center'}>Cards</TableHeadCell>
            <TableHeadCell>Last Updated</TableHeadCell>
            <TableHeadCell>Created by</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Biology</TableCell>
            <TableCell>5</TableCell>
            <TableCell>01.02.2022</TableCell>
            <TableCell>Dimych</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>React js</TableCell>
            <TableCell>6</TableCell>
            <TableCell>01.03.2023</TableCell>
            <TableCell>Serg</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
}

const data = [
  {
    author: 'Dimych',
    cards: '4',
    date: '01.02.2022',
    id: '01',
    title: 'Biology',
  },
  {
    author: 'Serg',
    cards: '6',
    date: '01.03.2023',
    id: '02',
    title: 'React js',
  },
  {
    author: 'Vasya',
    cards: '8',
    date: '03.08.2020',
    id: '03',
    title: 'CSS',
  },
]
const icons = (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
      justifyContent: 'flex-end',
    }}
  >
    <Play />
    <Edit />
    <Trash />
  </div>
)
export const WithMapMethod = {
  args: {
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Cards</TableHeadCell>
            <TableHeadCell>Last Updated</TableHeadCell>
            <TableHeadCell>Created by</TableHeadCell>
            <TableHeadCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.cards}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.author}</TableCell>
              <TableCell>{icons}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </>
    ),
  },
}

export const Empty = {
  render: () => <TableEmpty />,
}
