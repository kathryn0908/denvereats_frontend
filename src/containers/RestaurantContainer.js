import React from 'react'
import RestaurantCard from '../components/RestaurantCard'
import AppBar from '../styles/AppBar'
import SearchBar from '../styles/SearchBar'


export default function RestaurantContainer(props){
     
    const displayRestaurants = props.restaurants.slice(0,20).map(restaurant => <RestaurantCard {...props} ratings={props.ratings} restaurant={restaurant} key={restaurant.id} />)

    return(
        <>
        <div className='localrestaurant-container'>
            <AppBar />
            <h1 className='header'>Local Denver Restaurants</h1>
        </div>
            <SearchBar {...props} restaurants={props.restaurants} ratings={props.ratings}/>
        <div className='container'>
            {displayRestaurants}
        </div>
        </>
    )
}