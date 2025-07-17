import {clerkMiddleware, createRouteMatcher} from '@clerk/nextjs/server';

const isProtected = createRouteMatcher([
  	'/'
]);

export default clerkMiddleware(async (auth, req) => {
	if(isProtected(req)){
		await auth.protect();
	}
});

export const config = {
  	matcher: [
    	'/((?!_next|favicon.ico|.*\\.(?:jpg|jpeg|png|gif|svg|webp|css|js|ico)).*)'
  	]
};