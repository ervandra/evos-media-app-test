import { useEffect } from 'react';
import { useSetState } from '@ervandra/use-setstate'
import Masonry from 'react-masonry-css'
import Head from 'next/head'
import Header from '../components/global/Header';

export default function Home() {
  const initialState = {
    data: [],
    isLoading: true,
    isError: false,
    search: '',
  }
  const { state, setState } = useSetState(initialState);
  const { data, isLoading, search } = state;

  useEffect(() => {
    fetch(`https://gist.githubusercontent.com/maulidiyah-nur/b79128aa79459304a26d4b9e24bf9518/raw/8bdfaa6aba67863939987cdad828409e84f6aa17/media.json`)
      .then(res => res.json())
      .then(resp => {
        setState({ data: resp })
      })
      .finally(() => setState({ isLoading: false }))
  }, [])


  const items = search === '' ? data : data.filter(d => d.name.includes(search));



  return (
    <div className="app-container">
      <Head>
        <title>FE Test - Ervandra Halim</title>
        <meta name="author" content="Ervandra Halim <ervandra.halim@gmail.com>" />
      </Head>
      <Header search={search} onChangeSearch={e => setState({ search: e.target.value })} />
      <section id="content" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="main-content">

                {isLoading || items.length === 0 ? (
                  <div className={`loading alert-${search !== '' ? 'warning' : 'secondary'} bg-gradient p-3 rounded border rounded text-center`}>
                    {search !== '' ? (
                      <p className="m-0">Not found..</p>
                    ) : (
                      <p className="m-0">Loading..</p>
                    )}
                  </div>
                ) : (
                  <Masonry
                    breakpointCols={
                      {
                        default: 6,
                        1100: 4,
                        600: 2
                      }
                    }
                    className="masonry-grid"
                    columnClassName="masonry-grid_column">
                    {items.map(item => {
                      const { _id, name, src, index } = item;
                      return (
                        <div className="card-item" key={_id}>
                          <figure>
                            <img src={src} alt={name} loading="lazy" />
                            <figcaption>
                              <p className="m-0">{index} - {name}</p>
                            </figcaption>
                          </figure>
                        </div>
                      )
                    })}
                  </Masonry>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}