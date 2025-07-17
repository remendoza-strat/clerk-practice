import {UserButton} from '@clerk/nextjs';
import {currentUser} from '@clerk/nextjs/server';

export default async function Page(){
  	const user = await currentUser();
  	return(
    	<>
			<UserButton/>
			<h1>Welcome back, {user?.firstName}</h1>
    	</>
  );
}