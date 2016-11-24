import { INCREMENT_COUNTER } from 'redux/constants/CounterConstants';

export function incrementCounter() {
    return { type: INCREMENT_COUNTER };
}