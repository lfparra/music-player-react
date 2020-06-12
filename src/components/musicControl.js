import React, { useState, useEffect } from 'react';

function MusicControl() {

    const [state, setState] = useState({

        playBottom: null,
        songs: [],
        canciones: [
            { id: 1, category: "game", name: "Mario Castle", url: "files/mario/songs/castle.mp3" },
            { id: 2, category: "game", name: "Mario Star", url: "files/mario/songs/hurry-starman.mp3" },
            { id: 3, category: "game", name: "Mario Overworld", url: "files/mario/songs/overworld.mp3" },
            { id: 4, category: "game", name: "Mario Stage 1", url: "files/mario/songs/stage1.mp3" },
            { id: 5, category: "game", name: "Mario Stage 2", url: "files/mario/songs/stage2.mp3" },
            { id: 6, category: "game", name: "Mario Star", url: "files/mario/songs/starman.mp3" },
            { id: 7, category: "game", name: "Mario Underworld", url: "files/mario/songs/underworld.mp3" },
            { id: 8, category: "game", name: "Mario Underwater", url: "files/mario/songs/underwater.mp3" },
            { id: 9, category: "game", name: "Zelda Castle", url: "files/id ogam e/songs/zelda_castle.mp3" },
            { id: 10, category: "game", name: "Zelda Outworld", url: "files/id ogam e/songs/zelda_outworld.mp3" },
            { id: 11, category: "game", name: "Zelda Titles", url: "files/id ogam e/songs/zelda_title.mp3" },
            { id: 11, category: "game", name: "Sonic Brain Zone", url: "files/id ogam e/songs/sonic_brain-zone.mp3" },
            { id: 11, category: "game", name: "Zelda Link To Past", url: "files/id ogam e/songs/zelda_link-to-past.mp3" },
            { id: 12, category: "game", name: "Dong KinKong Main", url: "files/other/songs/dkng-main.mp3" },
            { id: 13, category: "game", name: "Dong KinKong Other", url: "files/other/songs/dkng-other.mp3" },
            { id: 14, category: "game", name: "Mega-Man", url: "files/other/songs/mega-man.mp3" },
            { id: 15, category: "cartoon", name: "Flintstones", url: "files/cartoons/songs/flintstones.mp3" },
            { id: 16, category: "cartoon", name: "Power-Rangers", url: "files/cartoons/songs/power-rangers.mp3" },
            { id: 17, category: "cartoon", name: "Simpsons", url: "files/cartoons/songs/simpsons.mp3" },
            { id: 18, category: "cartoon", name: "South-Park", url: "files/cartoons/songs/south-park.mp3" },
            { id: 19, category: "cartoon", name: "Thundercats", url: "files/cartoons/songs/thundercats.mp3" },
            { id: 20, category: "cartoon", name: "X-Men", url: "files/cartoons/songs/x-men.mp3" }
        ],
        playSong: 0

    });

    const path = "https://assets.breatheco.de/apis/sound/"

    const player = (e) => {
        console.log("play");
        state.playBottom.play();
        setState(prevState => {
            return { ...prevState }
        })
    }

    const handleClick = (e) => {
        let { playSong } = state;
        console.log(e);
        if (e === true) {
            if (playSong == 0) {
            } else {
                playSong--;
                state.playBottom.autoplay = true;
            }
        } else if (e === false) {
            if (playSong < state.songs.length - 1) {
                playSong++;
                state.playBottom.autoplay = true;
            } else {
                return
            }
        }
        setState({ ...state, playSong })
    }

    const getSongs = (url) => {
        fetch(url)
            .then((resp) => {
                return resp.json()
            })
            .then((data) => {
                setState(prevState => {
                    return { ...prevState, songs: data }
                })
            })
    }

    useEffect(() => {
        getSongs("https://assets.breatheco.de/apis/sound/songs")
    }, [])


    return (
        <>
            {
                state.songs.length > 0 ?
                    (
                        <>  
                            <div className="setList" data-spy="scroll" data-target="#setList">
                                <ol> {state.songs.map((elem, index, arr) => {
                                    return <li>{elem.name}</li>
                                    })}
                                </ol>
                            </div>
                            <div className="musicControl">
                                <ul>
                                    <li>
                                        <button onClick={(e) => handleClick(true)}>
                                            <i className="fas fa-backward"></i>
                                            <audio ref={(t) => state.playBottom = t} src={path + state.songs[state.playSong].url}></audio>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={(e) => player(e)}>
                                            <i className="fas fa-play"></i>
                                            <audio ref={(t) => state.playBottom = t} src={path + state.songs[state.playSong].url}></audio>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={(e) => handleClick(false)}>
                                            <i className="fas fa-forward"></i>
                                            <audio ref={(t) => state.playBottom = t} src={path + state.songs[state.playSong].url}></audio>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) :
                    (
                        <div className="text-center ">
                            <div className="spinner-border text-warning" role="status">
                                <h2 className="sr-only">Loading...</h2>
                            </div>
                        </div>
                    )
            }

        </>
    );
}

export default MusicControl;