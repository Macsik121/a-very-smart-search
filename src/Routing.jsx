import React from 'react';
import { Route, Switch } from 'react-router-dom';

class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            searchValue: '',
            artists: [
                {
                    id: 1,
                    name: 'kizaru',
                    tags: ['кизару'],
                    avatar: '/images/kizaru.jpeg'
                },
                {
                    id: 2,
                    name: 'MORGENSHTERN',
                    tags: ['моргенштерн', 'алишер'],
                    avatar: '/images/morgenal.jpeg'
                },
                {
                    id: 3,
                    name: 'OG Buda',
                    tags: ['буда', 'ог', 'ог буда'],
                    avatar: '/images/og_buda.jpeg'
                },
                {
                    id: 4,
                    name: 'MAYOT',
                    tags: ['майот'],
                    avatar: '/images/mayot.jpeg'
                },
                {
                    id: 5,
                    name: 'SODA LUV',
                    tags: ['сода', 'сода лув'],
                    avatar: '/images/soda_luv.jpeg'
                }
            ],
            foundElems: []
        };
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(e) {
        let searchValue = e.target.value;
        this.setState({ searchValue });
        const { artists } = this.state;
        searchValue = searchValue.toLowerCase().trim();
        let foundElems = [];
        if (searchValue != '') {
            artists.map(el => {
                let foundLength = 0;
                let whatToReturn = null;
                const name = el.name.toLowerCase();
                function iterateStr(str) {
                    for(let i = 0; i < str.length; i++) {
                        const currentLetter = str[i];
                        for(let j = 0; j < searchValue.length; j++) {
                            const currentSearchLetter = searchValue[j];
                            if (currentSearchLetter == currentLetter) {
                                foundLength++;
                            }
                            if (foundLength >= searchValue.length) {
                                break;
                            }
                        }
                        if (foundLength >= searchValue.length) {
                            break;
                        }
                    };
                    if (foundLength < searchValue.length) {
                        if (str.includes(searchValue)) {
                            foundElems.push(el);
                            whatToReturn = el;
                        }
                    } else {
                        foundElems.push(el);
                        whatToReturn = el;
                    }

                    foundLength = 0;
                    return whatToReturn;
                }
                const result = iterateStr(name);
                if (!result) {
                    for (let i = 0; i < el.tags.length; i++) {
                        const tag = el.tags[i];
                        const result = iterateStr(tag.toLowerCase());
                        if (result) {
                            break;
                        }
                    }
                }
            });
        }
        this.setState({ foundElems });
    }
    render() {
        const {
            foundElems,
            artists,
            searchValue
        } = this.state;

        let elemsToRender = [];
        if (searchValue == '') {
            artists.map(el => {
                elemsToRender.push(
                    <div key={el.id} className="artist">
                        <img src={el.avatar} className="artist-avatar" />
                        <div className="labels">
                            <span className="artist-name">
                                {el.name}
                            </span>
                            <label className="artist-label">Артист</label>
                        </div>
                    </div>
                )
            });
        } else {
            foundElems.map(el => {
                elemsToRender.push(
                    <div key={el.id} className="artist">
                        <img src={el.avatar} className="artist-avatar" />
                        <div className="labels">
                            <span className="artist-name">
                                {el.name}
                            </span>
                            <label className="artist-label">Артист</label>
                        </div>
                    </div>
                );
            })
        }

        return (
            <div className="search">
                <input
                    onChange={this.handleSearch}
                    className="search-input"
                    placeholder="Поиск..."
                />
                <div className="artists">
                    {elemsToRender}
                </div>
            </div>
        )
    }
}

export default function Routing() {
    return (
        <Switch>
            <Route exact path="/" component={Content} />
        </Switch>
    )
}
