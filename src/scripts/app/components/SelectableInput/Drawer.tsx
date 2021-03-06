import React from 'react'
import Option from './Option'
import classes from 'app/lib/classname'

export interface DrawerProps {
  visible: boolean
  options: string[]
  focusing: number
  selected: string[]
  refs(el: HTMLUListElement): void
  onChange(cursor: number): void
}

const Drawer: React.SFC<DrawerProps> = props => (
  <ul ref={props.refs} className={classes('query-input--drawer', { visible: props.visible })}>
    {props.options.map((option, index) => (
      <Option
        key={option}
        text={option}
        checked={-1 !== props.selected.indexOf(option)}
        focusing={index === props.focusing}
        position={index}
        onChange={props.onChange}
      />
    ))}
  </ul>
)

export default Drawer
