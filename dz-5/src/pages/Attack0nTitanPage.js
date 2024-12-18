import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {attackTitanFetch} from "../redux/actions";

const AttackOnTitan = () => {
    const titan = useSelector(state => state.catReducer.titan);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(attackTitanFetch())
        console.log(titan.data)
    }, [dispatch]);

    return (
        <div>
            <h1>Attack on titan</h1>
            {Array.isArray(titan) && titan.length > 0 ? (
                titan.map((anime, index) => (
                    <div key={index}>
                        <h3>{anime.title}</h3>
                        <img src={anime.images.jpg.image_url} alt={anime.title} width="200" />
                        <p>{anime.synopsis}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )}

export default AttackOnTitan;