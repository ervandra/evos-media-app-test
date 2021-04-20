import { useEffect } from 'react';
import { useSetState } from '@ervandra/use-setstate'

export default function Image({ data }) {
  const { _id, name, src, index } = data;
  const initialState = {
    loadedSrc: '',
    isLoading: true,
  }
  const { state, setState } = useSetState(initialState);
  const { loadedSrc, isLoading } = state;
  useEffect(() => {
    fetch(src, { redirect: 'follow' })
      .then(res => res.url)
      .then(resp => setState({ loadedSrc: resp }))
      .finally(() => setState({ isLoading: false }))
  }, [])
  if (loadedSrc === '' || isLoading) {
    return (
      <div className="card-item" key={_id}>
        <figure>
          <img src="https://via.placeholder.com/240?text=+" alt={name} loading="lazy" />
          <figcaption>
            <p className="m-0">{index} - {name}</p>
          </figcaption>
        </figure>
      </div>
    )
  }
  return (
    <div className="card-item" key={_id}>
      <figure>
        <img src={loadedSrc} alt={name} loading="lazy" />
        <figcaption>
          <p className="m-0">{index} - {name}</p>
        </figcaption>
      </figure>
    </div>
  )
}