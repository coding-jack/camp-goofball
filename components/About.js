import React from 'react'

const About = () => {
  return (
    <div name="about" id="#about" className="pt-6 md:p-12">
      <h2 className="text-5xl p-2 md:p-6">About</h2>
      <div className="md:grid grid-cols-4 font-normal">
        <div className="col-span-2 relative p-2 md:p-6">
          <img className="relative z-10" src="/images/HeroSlider/2-Crowd.jpg" alt="" />
          <p className="z-0 inset-0 md:pt-6">Come get Goofy at this Denver-area music festival.  Only 1 hour from the mile high city, this event features local talent of all genres, art, theme parties, games, general camp goofiness and more!  Camp Goofball is a weekend long camping event held at a private ranch just south of Buffalo Creek, Colorado.  This festival is brought to you by your hosts Goofball Bucket, along with an amazing crew of dedicated volunteers.  Get Your tickets today, and we’ll see you at camp. Let’s Get Goofy Y’all.** 2 nights: Friday, September 9th - Saturday, September 10th (camp opens at 3PM Friday and closes at 12PM Sunday)</p>
        </div>
        <div className="col-span-2 p-2 md:p-6">
          {/* <img className="relative z-10" src="/images/HeroSlider/5-GroupStage.jpg" alt="" /> */}
          <p className="md:pt-0 md:pb-6">Friday Night's Theme - "Out of this World". Calling all extraterrestrials, aliens, martians, space harpies, robots, and intergalactic travelers, do we have an event for you.  Have you ever felt like you didn't belong on this planet? Maybe you are from a distant galaxy sent here to spy on the humans. Whatever your origin story is, be prepared to suit up as we blast off into the cosmos for a truly funky interstellar trip into the deepest regions of space and goofiness. There will be an outer space disco on Friday night.  Put  your moon boots on and let’s strut our stuff across the universe.</p>
          <p className="z-0 inset-0 md:pt-6">Saturday’s Theme - "America? Fuck Yeah!" Ahh...What a country we live in. Things may not be perfect in the land of the free, but it's still the home of the goof. Whether you love or hate the USA this is your chance to show everyone how you feel.  So let's get patriotic, or down right sarcastic as we celebrate all things American. Just like the good ole USA it is our differences that make this camp great. So bring your reds, whites, and blues, cut your hair into a mullet, bust out your favorite pair of jorts, put on a stained wife beater, and crack a PBR because it’s America…Fuck Yeah! Saturday afternoon there will be a jorts fashion show. We will be judging on style of outfit, length of jorts, and athletic ability. . There will be a guys and girls division so let’s put those shears to those jeans people. Fuck yeah!</p>
        </div>
      </div>
    </div>
  )
}

export default About;
