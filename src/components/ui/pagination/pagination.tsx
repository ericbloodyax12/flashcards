import { forwardRef } from 'react'

import s from './pagination.module.scss'
type Props = {
  currentPage: number
  onChangePage: (currentPage: number) => void
  perPage: number
  totalPage: number
}
export const Pagination = forwardRef<HTMLDivElement, Props>(
  ({ currentPage, onChangePage, perPage, totalPage }, ref) => {
    return <div className={s.paginator} ref={ref}></div>
  }
)
