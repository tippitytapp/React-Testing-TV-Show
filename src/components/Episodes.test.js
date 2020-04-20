import React from "react";
import {render, waitFor} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Episodes from './Episodes';
import {episodes} from '../test-data'

test('can view episode data', ()=>{
console.log(episodes.length)
})

test('renders without error', () => {
    render(<Episodes episodes={[]} />)
})

test('renders with episodes after api call', () => {
    const {rerender, queryAllByTestId} = render(<Episodes episodes={[]}/>);
    expect(queryAllByTestId(/episodes/i)).toHaveLength(0)

    rerender(<Episodes episodes={episodes.episodes} />)
    expect(queryAllByTestId(/episodes/i)).toHaveLength(26)
})