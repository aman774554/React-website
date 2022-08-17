import React from 'react';
import SingleComment from './SingleComment';
import profile1 from '../image/pic-1.jpg';
import profile2 from '../image/pic-2.jpg';
import profile3 from '../image/pic-3.jpg';
import UserCard from './UserCard';
const Friends = () => {
	return(
		<div>

<div className="container p-3 my-3 border card ">
    <div className='ui comments'>
    <UserCard>
      <div>
        Hello my name is Aman, and I am live in Gwalior.
      </div>
    </UserCard>
    <UserCard>
      <SingleComment
        name='Aman'
        date='Today at 5:00 PM'
        text='it is amazing'
        picture={profile1}
      />
    </UserCard>
    <UserCard>
      <SingleComment
        name='Ayush'
        date='Today at 6:00 PM'
        text='Great Job'
        picture={profile2}
      />
    </UserCard>
    <UserCard>
      <SingleComment
        name='Aditya'
        date='Today at 7:00 PM'
        text='Thanks...'
        picture={profile3}
      />
    </UserCard>
  </div>
  </div>
		</div>
	)
}

export default Friends;
