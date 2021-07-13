import React from 'react'
import './index.css';
import pattern from '../Image/bg-pattern-card.svg';
import profile from '../Image/image-victor.jpg';
export default function ProfileCard() {
    return (
        <div className="profile-card-main-component">  
        <div className="card-container">
            <div className="card-container-1">
                <img
                src={pattern}
                className="pattern"
                />
                <img
                src={profile}
                className="profile"
                />
                <span>
                    <h1>Victor Crest</h1>
                    <p>26</p>
                </span>
                <p>London</p>
            </div>
            <div className="card-container-2">
                <div className="card-container-status">
                    <h3>80K</h3>
                    <p>Followers</p>
                </div>
                <div className="card-container-status">
                    <h3>803K</h3>
                    <p>Likes</p>
                </div>
                <div className="card-container-status">
                    <h3>1.4K</h3>
                    <p>Photos</p>
                </div>

            </div>

        </div>
        </div>
    )
}
