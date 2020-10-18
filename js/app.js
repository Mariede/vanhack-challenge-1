/*
	Events to be displayed ------------
*/
const dateToday = new Date();
const dateIncrement = 5;

const eventTypes = [
	{
		id: 1,
		name: 'MeetUp',
		standout: false,
		premium: false
	},
	{
		id: 2,
		name: 'Leap',
		standout: true,
		premium: false
	},
	{
		id: 3,
		name: 'Recruiting Mission',
		standout: true,
		premium: false
	},
	{
		id: 4,
		name: 'VanHackathon',
		standout: true,
		premium: false
	},
	{
		id: 5,
		name: 'Premium-only Webinar',
		standout: false,
		premium: true
	},
	{
		id: 6,
		name: 'Open Webinar',
		standout: false,
		premium: false
	}
];

const events = [
	{
		id: 1,
		title: 'Awesome event',
		date: new Date(dateToday.setDate(dateToday.getDate() + dateIncrement)),
		type: eventTypes[0],
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		link: 'https://blog.vanhack.com/blog/categoria/events/',
		image: './assets/img/event-image-1.jpg'
	},
	{
		id: 2,
		title: 'Do not loose this one',
		date: new Date(dateToday.setDate(dateToday.getDate() + dateIncrement)),
		type: eventTypes[1],
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		link: 'https://blog.vanhack.com/blog/categoria/events/',
		image: './assets/img/event-image-2.jpg'
	},
	{
		id: 3,
		title: 'Super super',
		date: new Date(dateToday.setDate(dateToday.getDate() + dateIncrement)),
		type: eventTypes[4],
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam.',
		link: 'https://blog.vanhack.com/blog/categoria/events/',
		image: './assets/img/event-image-4.jpg'
	},
	{
		id: 4,
		title: 'Come and check, guaranteed',
		date: new Date(dateToday.setDate(dateToday.getDate() + dateIncrement)),
		type: eventTypes[2],
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		link: 'https://blog.vanhack.com/blog/categoria/events/',
		image: './assets/img/event-image-3.jpg'
	},
	{
		id: 5,
		title: 'Free for all',
		date: new Date(dateToday.setDate(dateToday.getDate() + dateIncrement)),
		type: eventTypes[5],
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
		link: 'https://blog.vanhack.com/blog/categoria/events/',
		image: './assets/img/event-image-5.jpg'
	},
	{
		id: 6,
		title: 'Find new people',
		date: new Date(dateToday.setDate(dateToday.getDate() + dateIncrement)),
		type: eventTypes[0],
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
		link: 'https://blog.vanhack.com/blog/categoria/events/',
		image: './assets/img/event-image-6.jpg'
	},
	{
		id: 7,
		title: 'This is big',
		date: new Date(dateToday.setDate(dateToday.getDate() + dateIncrement)),
		type: eventTypes[1],
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		link: 'https://blog.vanhack.com/blog/categoria/events/',
		image: './assets/img/event-image-7.jpg'
	},
	{
		id: 8,
		title: 'You must see this my friend',
		date: new Date(dateToday.setDate(dateToday.getDate() + dateIncrement)),
		type: eventTypes[5],
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		link: 'https://blog.vanhack.com/blog/categoria/events/',
		image: './assets/img/event-image-8.jpg'
	},
	{
		id: 9,
		title: 'Do you think you can get it?',
		date: new Date(dateToday.setDate(dateToday.getDate() + dateIncrement)),
		type: eventTypes[3],
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		link: 'https://blog.vanhack.com/blog/categoria/events/',
		image: './assets/img/event-image-9.jpg'
	},
	{
		id: 10,
		title: 'Incredible event, just show up',
		date: new Date(dateToday.setDate(dateToday.getDate() + dateIncrement)),
		type: eventTypes[0],
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
		link: 'https://blog.vanhack.com/blog/categoria/events/',
		image: './assets/img/event-image-10.jpg'
	},
	{
		id: 11,
		title: 'Did you see this coming?',
		date: new Date(dateToday.setDate(dateToday.getDate() + dateIncrement)),
		type: eventTypes[4],
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
		link: 'https://blog.vanhack.com/blog/categoria/events/',
		image: './assets/img/event-image-11.jpg'
	},
	{
		id: 12,
		title: 'So, this is it =)',
		date: new Date(dateToday.setDate(dateToday.getDate() + dateIncrement)),
		type: eventTypes[5],
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		link: 'https://blog.vanhack.com/blog/categoria/events/',
		image: './assets/img/event-image-12.jpg'
	}
];
// ------------------------------------

/*
	Helper object ---------------------
*/
const helper = {
	getClicked: (_events, _id) => {
		return (
			_events.filter(
				ev => ev.id === _id
			).pop()
		)
	},
	dateTimeFormat: new Intl.DateTimeFormat(
		undefined, // Default locale
		{
			year: 'numeric',
			month: 'long',
			day: '2-digit',
		}
	)
};
// ------------------------------------

/*
	Interacting with the event --------
*/
const handleApplyNow = (id, e) => {
	e.preventDefault();

	const clicked = helper.getClicked(events, id);

	if (clicked) {
	// Event data
		const { title, type } = clicked;
		const isPremium = type && type.premium;

		Swal
		.fire(
			{
				icon: 'question',
				width: '100%',
				html: `
					<div class="sal-content">
						<h1>Really apply to:</h1>
						<h3>${(type ? `${type.name}. ` : '') + (title || '')}</h3>
						<hr />
					</div>
				`,
				showCancelButton: true,
				confirmButtonText: '<i class="fas fa-thumbs-up"></i> Apply now',
				cancelButtonText: '<i class="fas fa-window-close"></i> Later'
			}
		).then(
			result => {
				if (result.isConfirmed) {
					if (!isPremium) {
						Swal.fire(
							{
								icon: 'success',
								width: '100%',
								html: `
									<div class="sal-content">
										<h1>You applied to:</h1>
										<h3>${(type ? `${type.name}. ` : '') + (title || '')}</h3>
										<hr />
									</div>
								`,
								confirmButtonText: '<i class="fas fa-check"></i> Done'
							}
						);
					} else {
						Swal.fire(
							{
								icon: 'error',
								width: '100%',
								html: `
									<div class="sal-content">
										<h1>You can not apply to this event...</h1>
										<h3>A premium membership plan is needed. Want to know more about our plans, <a href="https://vanhack.com/premium/" target="_premium-plans">check it here</a>!</h3>
										<hr />
									</div>
								`,
								confirmButtonText: '<i class="fas fa-check"></i> Done'
							}
						);
					}
				}
			}
		);
	} else {
	// Event not found
		Swal.fire(
			{
				icon: 'error',
				width: '100%',
				html: `
					<div class="sal-content">
						<h1>You can not apply to this event...</h1>
						<h3>There is a problem, the event was not found.</h3>
						<hr />
					</div>
				`,
				confirmButtonText: '<i class="fas fa-check"></i> Sorry'
			}
		);
	}
};

const handleSeeMore = (id, e) => {
	e.preventDefault();

	const clicked = helper.getClicked(events, id);

	if (clicked) {
	// Event data
		const { title, date, type, description, image } = clicked || {};

		Swal
		.fire(
			{
				icon: 'info',
				width: '100%',
				html: `
					<div class="sal-content">
						<h1>${title || ''}</h1>

						<div class="top">
							<span class="top-date">${(date ? helper.dateTimeFormat.format(date) : '')}</span>
							<span class="top-type">${(type && type.name) || ''}</span>
						</div>

						<div class="description">
							${
								image ? (
									`
										<img src=${image} class="bordered" alt="Event Image">
									`
								) : (
									''
								)
							}
							<span class="text">${description || ''}</span>
						</div>

						<hr />
					</div>
				`,
				confirmButtonText: '<i class="fas fa-check"></i> Done'
			}
		);
	} else {
	// Event not found
		Swal.fire(
			{
				icon: 'error',
				width: '100%',
				html: `
					<div class="sal-content">
						<h1>You can not see details of this event...</h1>
						<h3>There is a problem, the event was not found.</h3>
						<hr />
					</div>
				`,
				confirmButtonText: '<i class="fas fa-check"></i> Sorry'
			}
		);
	}
};
// ------------------------------------

/*
	Displaying the events -------------
*/
const startApp = () => {
	const _root = document.getElementById('root');

	_root.innerHTML = `
		<div class="header">
			<i class="fas fa-globe"></i> Vanhack's Challenge - Event Page
		</div>
		<hr />
	`;

	const wrapper = document.createElement('div');
	wrapper.setAttribute('id', 'wrapper');

	events.forEach(
		event => {
			const { id, title, date, type, description, link, image } = event;

			const content = document.createElement('div');
			const isContentHighlight = type && type.standout;
			const isPremium = type && type.premium;

			content.classList.add('content', (isPremium ? 'premium' : (isContentHighlight ? 'highlight' : 'base')));

			content.innerHTML = `
				<div class="share">
					<a href="https://www.facebook.com/sharer/sharer.php?u=${link || ''}" target="_event-share">
						<img src="./assets/img/fb.png" title="Share" alt="Facebook" />
					</a>

					<a href="https://twitter.com/share?text=Check this Vanhack Event&url=${link || ''}&hashtags=vanhack,events" target="_event-share">
						<img src="./assets/img/twitter.png" title="Share" alt="Twitter" />
					</a>
				</div>

				<div class="top">
					<span class="top-date">${date ? helper.dateTimeFormat.format(date) : ''}</span>

					<span class="top-type${(!isPremium ? (isContentHighlight ? ' highlight' : ' base') : '')}">${(isPremium ? '<i class="fas fa-star"></i> ' : '')}${(type && type.name) || ''}</span>
				</div>

				<div class="title">
					${title || ''}
				</div>

				${
					image ? (
						`
							<div class="image">
								<img src=${image} class="bordered" alt="Event Image">
							</div>
						`
					) : (
						''
					)
				}

				<div class="description">
					${description || ''}
				</div>

				<div class="footer">
					<button type="button" class="swal2-confirm swal2-styled" onClick="return handleApplyNow(${id || 0}, event);"><i class='fas fa-sitemap'></i> Go for it</button>

					<button type="button" class="swal2-deny swal2-styled" onClick="return handleSeeMore(${id || 0}, event);"><i class='fas fa-glasses'></i> See more</button>
				</div>
			`;

			wrapper.append(content);
		}
	);

	_root.append(wrapper);
};
// ------------------------------------

startApp();
