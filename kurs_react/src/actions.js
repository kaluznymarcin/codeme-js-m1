export function setOpenModal(open = false) {
    return {
        type: 'SET_OPEN_MODAL',
        payload: open
    }
}

export function setFetchData(data) {
    return {
        type: 'SET_FETCH_DATA',
        payload: data
    }
}

export const fetchData = (dispatch, getState) =>
    (url) => {
        const currency = getState().currency;

        currency.length && fetch('http://api.nbp.pl/api/exchangerates/tables/a/last/5/', {
          headers: {
            Accept: 'application/json'
          }
        })
        .then(res => res.json())
        .then(data_from_res => dispatch(setFetchData(data_from_res)))
    }