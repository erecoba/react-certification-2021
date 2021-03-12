import * as types from '../types';
import Services from '../../services';

const YoutubeService = Services().youtube;

export const youtubeGetVideos = async () => {
  // const response = await YoutubeService.getVideos();
  // const videos = response.result.items || [];

  const videos = [
    {
      kind: 'youtube#video',
      etag: 'IT7GzeChFwAx-Y1mNW2KcqHzm28',
      id: 'AeaR5QbXgpM',
      snippet: {
        publishedAt: '2021-03-10T05:00:13Z',
        channelId: 'UCenjunBhBhvKjfDAESnoppw',
        title: 'Rod Wave - Street Runner (Official Video)',
        description:
          "#rodwave #streetrunner #soulfly\n\nPre-save the \"SoulFly\" Album: https://music.apple.com/us/album/soulfly/1557600260\n\nStream Street Runner: http://smarturl.it/StreetRunnerRodWave\n\nBuy Merch: https://thebottomboysurvivor.com\n\nFollow Rod Wave:\n► Instagram: https://www.instagram.com/rodwave/?hl=en\n► Twitter: https://twitter.com/rodwave\n► SoundCloud: https://soundcloud.com/rodwave\n► YouTube: https://smarturl.it/RWYTSub\n\n\"Street Runner\" Lyrics\n\nVERSE\nSorry i missed your call i was on a jet \nI been so zoned out tryna figure out whats next\nSo scared to feel i'm calculating my every step\nGotta watch my back and keep my strap but nonetheless\nI think about you when i'm gone wishing i could hold ya \nProlly home wishing someone come and love you how they posed to \nAnd i hope you see this letter before it's too late \nOut here chasing my dream don't get in the way \nI blame my struggles and my uncles for my hustling ways\nI'm way in michigan looking at real estate\nLord knows i wanna lay you down but i'm chasing cake\nCan't go back broke stay on the go that's all that's on my brain\n\nBRIDGE\nShe tell me fuck you i hate you then i love you\ncan't blame you\nShe say i love but don't trust you can't change you \nI just hope we don't end up how they do crash and burn on the shaderoom \n\nCHORUS\nStreetrunner gotta stop running sometime\nI'm in yo city tonight \nAnd these lights make me feel so inspired\nGoing higher and higher and higher\nTaking me higher\nHigher and higher and Higher",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/AeaR5QbXgpM/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/AeaR5QbXgpM/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/AeaR5QbXgpM/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/AeaR5QbXgpM/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/AeaR5QbXgpM/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'RodWave',
        tags: [
          'rod wave',
          'hunger games',
          'hunger games 3',
          'ptsd',
          'ghetto gospel',
          'kevin gates',
          'lil durk',
          'nba youngboy',
          'NLE Choppa',
          'Drake',
          'Juice Wrld',
          'Roddy Rich',
          'YK Osiris',
          'Yella Beezy',
          'Jackboy',
          'OG3Three',
          'YFN Lucci',
          'Money Man',
          'Q Money',
          'Yung Dolph',
          'Pray 4 love',
          'Pray',
          'Love',
          'Pray For Love',
          'Cuban Link',
          'Heart On Ice',
          'Ghetto Gospel',
          'Heart',
          'pray',
          'pray for love',
          'pray 4 love',
          'rod wave pray for love',
          'hip hop',
          'rap',
          '2020',
          'music',
          'rod',
          'wave',
          'soulfly',
          'street',
          'runner',
          'streetrunner',
        ],
        categoryId: '10',
        liveBroadcastContent: 'none',
        localized: {
          title: 'Rod Wave - Street Runner (Official Video)',
          description:
            "#rodwave #streetrunner #soulfly\n\nPre-save the \"SoulFly\" Album: https://music.apple.com/us/album/soulfly/1557600260\n\nStream Street Runner: http://smarturl.it/StreetRunnerRodWave\n\nBuy Merch: https://thebottomboysurvivor.com\n\nFollow Rod Wave:\n► Instagram: https://www.instagram.com/rodwave/?hl=en\n► Twitter: https://twitter.com/rodwave\n► SoundCloud: https://soundcloud.com/rodwave\n► YouTube: https://smarturl.it/RWYTSub\n\n\"Street Runner\" Lyrics\n\nVERSE\nSorry i missed your call i was on a jet \nI been so zoned out tryna figure out whats next\nSo scared to feel i'm calculating my every step\nGotta watch my back and keep my strap but nonetheless\nI think about you when i'm gone wishing i could hold ya \nProlly home wishing someone come and love you how they posed to \nAnd i hope you see this letter before it's too late \nOut here chasing my dream don't get in the way \nI blame my struggles and my uncles for my hustling ways\nI'm way in michigan looking at real estate\nLord knows i wanna lay you down but i'm chasing cake\nCan't go back broke stay on the go that's all that's on my brain\n\nBRIDGE\nShe tell me fuck you i hate you then i love you\ncan't blame you\nShe say i love but don't trust you can't change you \nI just hope we don't end up how they do crash and burn on the shaderoom \n\nCHORUS\nStreetrunner gotta stop running sometime\nI'm in yo city tonight \nAnd these lights make me feel so inspired\nGoing higher and higher and higher\nTaking me higher\nHigher and higher and Higher",
        },
        defaultAudioLanguage: 'en',
      },
      statistics: {
        viewCount: '828917',
        likeCount: '112147',
        dislikeCount: '735',
        favoriteCount: '0',
        commentCount: '9307',
      },
    },
    {
      kind: 'youtube#video',
      etag: 'Y-gKe_wx2PoUqrsNokSS6MCt0vI',
      id: 'sG9rX6Ifzhw',
      snippet: {
        publishedAt: '2021-03-09T10:58:19Z',
        channelId: 'UCq18eeL7D9Vd8DhjMcLh9QQ',
        title:
          'Piers and Alex Clash Over Prince Harry and Meghan’s Accusations of Racism | Good Morning Britain',
        description:
          'Following the Duke and Duchess of Sussex’s landmark interview with Oprah Winfrey, today’s Good Morning Britain shared the reaction to the revelations, including those about Meghan’s suicidal thoughts and allegations of racism within the Royal family.\n\nSubscribe now for more! http://bit.ly/1NbomQa\n\nBroadcast on 09/03/2021\n\nLike, follow and subscribe to Good Morning Britain!\n\nThe Good Morning Britain YouTube channel delivers you the news that you’re waking up to in the morning. From exclusive interviews with some of the biggest names in politics and showbiz to heartwarming human interest stories and unmissable watch again moments. \n\nJoin Susanna Reid, Piers Morgan, Ben Shephard, Kate Garraway, Charlotte Hawkins and Sean Fletcher every weekday on ITV from 6am until 9 every weekday!\n\nITV Hub: https://bit.ly/37kf3wD\nWebsite: http://bit.ly/1GsZuha\nYouTube: http://bit.ly/1Ecy0g1\nFacebook: http://on.fb.me/1HEDRMb\nTwitter: http://bit.ly/1xdLqU3\n\nhttp://www.itv.com\n\n#GMB #PiersMorgan #SusannaReid',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/sG9rX6Ifzhw/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/sG9rX6Ifzhw/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/sG9rX6Ifzhw/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/sG9rX6Ifzhw/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/sG9rX6Ifzhw/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'Good Morning Britain',
        tags: [
          'good morning britain',
          'breakfast show',
          'news',
          'morning news',
          'gmb',
          'good morning britain interview',
          'itv',
          'piers morgan',
          'susanna reid',
          'Talk Shows - Topic',
        ],
        categoryId: '24',
        liveBroadcastContent: 'none',
        defaultLanguage: 'en-GB',
        localized: {
          title:
            'Piers and Alex Clash Over Prince Harry and Meghan’s Accusations of Racism | Good Morning Britain',
          description:
            'Following the Duke and Duchess of Sussex’s landmark interview with Oprah Winfrey, today’s Good Morning Britain shared the reaction to the revelations, including those about Meghan’s suicidal thoughts and allegations of racism within the Royal family.\n\nSubscribe now for more! http://bit.ly/1NbomQa\n\nBroadcast on 09/03/2021\n\nLike, follow and subscribe to Good Morning Britain!\n\nThe Good Morning Britain YouTube channel delivers you the news that you’re waking up to in the morning. From exclusive interviews with some of the biggest names in politics and showbiz to heartwarming human interest stories and unmissable watch again moments. \n\nJoin Susanna Reid, Piers Morgan, Ben Shephard, Kate Garraway, Charlotte Hawkins and Sean Fletcher every weekday on ITV from 6am until 9 every weekday!\n\nITV Hub: https://bit.ly/37kf3wD\nWebsite: http://bit.ly/1GsZuha\nYouTube: http://bit.ly/1Ecy0g1\nFacebook: http://on.fb.me/1HEDRMb\nTwitter: http://bit.ly/1xdLqU3\n\nhttp://www.itv.com\n\n#GMB #PiersMorgan #SusannaReid',
        },
      },
      statistics: {
        viewCount: '5385655',
        likeCount: '58211',
        dislikeCount: '9703',
        favoriteCount: '0',
      },
    },
    {
      kind: 'youtube#video',
      etag: '5U-6JPl57R9ihElojjgVktUQpII',
      id: 'pIQIKIDZJjc',
      snippet: {
        publishedAt: '2021-03-09T18:00:12Z',
        channelId: 'UCi3OE-aN09WOcN9d2stCvPg',
        title: "David Dobrik & I Bought Markell A Car | Charli D'Amelio",
        description:
          "hi everyone. i wanted to organize this with @David Dobrik to surprise my awesome friend @Markell Washington! seeing markell's reaction was priceless and i'm so happy we were able to do this for him. thanks for watching, see you soon!!!\n\nmy socials: \nwebsite: https://www.charlidamelio.com/\ntiktok: https://www.tiktok.com/@charlidamelio\ninstagram: https://www.instagram.com/charlidamelio/\nyoutube: https://www.youtube.com/charlidamelio\nadd me on nap: https://www.snapchat.com/add/damelioc\n\nfollow david:\nInstagram: https://www.instagram.com/daviddobrik\nyoutube: https://www.youtube.com/daviddobrik\n\nfollow markell:\nInstagram: https://www.instagram.com/markellwashington\nyoutube: https://www.youtube.com/channel/UCRrqYoW62tYjqUWh6GzAuwg\n\n#charlidamelio #daviddobrik #markellwashington",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/pIQIKIDZJjc/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/pIQIKIDZJjc/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/pIQIKIDZJjc/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/pIQIKIDZJjc/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/pIQIKIDZJjc/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "charli d'amelio",
        tags: [
          'charli',
          'charlie',
          "charli d'amelio",
          'charli damelio',
          'damelio',
          "d'amelio",
          'tik tok',
          'music video',
          'official music video',
          'dixie damelio',
          "dixie d'amelio",
          'dixie',
          'tiktok',
          'exclusive',
          "marc d'amelio",
          "heidi d'amelio",
          'caifornia',
          'vlog',
          "charlie d'amelio",
          'charlie damelio',
          'music',
          'david dobrik',
          'david',
          'dobrik',
          'markell',
          'markell washington',
          'washington',
          'tesla',
          'got my friend a car',
          'car',
          'gift',
          'surprise',
        ],
        categoryId: '22',
        liveBroadcastContent: 'none',
        localized: {
          title: "David Dobrik & I Bought Markell A Car | Charli D'Amelio",
          description:
            "hi everyone. i wanted to organize this with @David Dobrik to surprise my awesome friend @Markell Washington! seeing markell's reaction was priceless and i'm so happy we were able to do this for him. thanks for watching, see you soon!!!\n\nmy socials: \nwebsite: https://www.charlidamelio.com/\ntiktok: https://www.tiktok.com/@charlidamelio\ninstagram: https://www.instagram.com/charlidamelio/\nyoutube: https://www.youtube.com/charlidamelio\nadd me on nap: https://www.snapchat.com/add/damelioc\n\nfollow david:\nInstagram: https://www.instagram.com/daviddobrik\nyoutube: https://www.youtube.com/daviddobrik\n\nfollow markell:\nInstagram: https://www.instagram.com/markellwashington\nyoutube: https://www.youtube.com/channel/UCRrqYoW62tYjqUWh6GzAuwg\n\n#charlidamelio #daviddobrik #markellwashington",
        },
      },
      statistics: {
        viewCount: '1841795',
        likeCount: '154599',
        dislikeCount: '7009',
        favoriteCount: '0',
        commentCount: '11576',
      },
    },
    {
      kind: 'youtube#video',
      etag: 'hC8Exgvy1FwcTEhAdBcLrwUR5fw',
      id: 'jJdlgKzVsnI',
      snippet: {
        publishedAt: '2021-03-09T05:00:12Z',
        channelId: 'UCpTaAz_BxtkUB1qc8JTU_7g',
        title: 'Doja Cat - Streets (Official Video)',
        description:
          "Doja Cat // Streets (Official Video)\nHot Pink // Out Now: https://smarturl.it/xHotPink\u200b\u200b \n\nSubscribe to Doja Cat's Official YouTube Channel: https://smarturl.it/DojaYTSubcribe\u200b\u200b \n\n“Streets” (Official Video)\nStarring: Doja Cat & Kofi Siriboe (@kofisiriboe)\n#DirectedbyChristianBreslauer\n-\nDirector: @christhedirector\nExecutive Producer: @christhedirector @miketheproducer\nCommissioner: @samhoustonishere\nProducer: @miketheproducer\nLine Producer: @nicky_bonez\nDirector of Photography: @jchema\nProduction Company: @luckybastards_inc @londonalley\n\nFollow Doja Cat:\nhttps://www.facebook.com/DojaCat\u200b\u200b\nhttps://www.instagram.com/dojacat/\u200b\u200b\nhttp://www.dojacat.com/\u200b\u200b\n\n#dojacat #streets #hotpink\n\nhttp://vevo.ly/3HJiqd",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/jJdlgKzVsnI/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/jJdlgKzVsnI/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/jJdlgKzVsnI/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/jJdlgKzVsnI/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/jJdlgKzVsnI/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'dojacatVEVO',
        tags: [
          'doja cat',
          'streets',
          'doja',
          'doja cat streets',
          'streets video',
          'doja cat streets video',
          'streets official video',
          'silhouette challenge',
          'doja cat silhouette',
          'streets silhouette',
          'streets challenge',
          'doja cat challenge',
          'streets tiktok',
          'silhouette tiktok',
          'doja cat tiktok',
          'say so',
          'doja cat say so',
          'doja cat rules',
          'like that',
          'hot pink',
          'doja cat hot pink',
          'hot pink sessions',
          'boss bitch',
          'doja cat juicy',
          'tia tamera',
          'doja cat freak',
          'saweetie',
          'best friend',
        ],
        categoryId: '10',
        liveBroadcastContent: 'none',
        localized: {
          title: 'Doja Cat - Streets (Official Video)',
          description:
            "Doja Cat // Streets (Official Video)\nHot Pink // Out Now: https://smarturl.it/xHotPink\u200b\u200b \n\nSubscribe to Doja Cat's Official YouTube Channel: https://smarturl.it/DojaYTSubcribe\u200b\u200b \n\n“Streets” (Official Video)\nStarring: Doja Cat & Kofi Siriboe (@kofisiriboe)\n#DirectedbyChristianBreslauer\n-\nDirector: @christhedirector\nExecutive Producer: @christhedirector @miketheproducer\nCommissioner: @samhoustonishere\nProducer: @miketheproducer\nLine Producer: @nicky_bonez\nDirector of Photography: @jchema\nProduction Company: @luckybastards_inc @londonalley\n\nFollow Doja Cat:\nhttps://www.facebook.com/DojaCat\u200b\u200b\nhttps://www.instagram.com/dojacat/\u200b\u200b\nhttp://www.dojacat.com/\u200b\u200b\n\n#dojacat #streets #hotpink\n\nhttp://vevo.ly/3HJiqd",
        },
      },
      statistics: {
        viewCount: '8519736',
        likeCount: '963163',
        dislikeCount: '10390',
        favoriteCount: '0',
        commentCount: '60269',
      },
    },
    {
      kind: 'youtube#video',
      etag: '-01SPEHeAkaNueQVbtQ3R-6oktM',
      id: 'CkTVoLamPio',
      snippet: {
        publishedAt: '2021-03-08T14:01:55Z',
        channelId: 'UC-SJ6nODDmufqBzPBwCvYvQ',
        title: 'Meghan, Duchess of Sussex, opens up about her family',
        description:
          'For the first time Meghan, Duchess of Sussex, publicly discusses her father Thomas Markle and her half-sister\'s forthcoming tell-all book in this previously unaired clip from her and Prince Harry\'s sit-down with Oprah Winfrey. Watch Oprah\'s full primetime special with Meghan and Prince Harry here: https://bit.ly/3t24kAK\n\nSubscribe to the "CBS This Morning" YouTube channel: https://bit.ly/3ceNNCX\nWatch more "CBS This Morning": http://bit.ly/1T88yAR\nLike "CBS This Morning" on Facebook: https://on.fb.me/1LhtdvI\nFollow "CBS This Morning" on Instagram: https://bit.ly/1Q7NGnY\nFollow "CBS This Morning" on Twitter: https://bit.ly/1Xj5W3p\nFollow CBS News on Twitter: https://bit.ly/3bdNXek\n\nGet the latest news and best in original reporting from CBS News delivered to your inbox. Sign up for newsletters: https://cbsn.ws/1RqHw7T\n\nGet your news on the go! Download CBS News mobile apps for Android and iOS: https://cbsn.ws/1Xb1WC8\n\nGet new episodes of shows you love across devices the next day, stream local news live, and watch full seasons of CBS fan favorites and originals anytime, anywhere with Paramount+. Sign up here: https://bit.ly/309gCe2\n\n---\nEach weekday morning, "CBS This Morning" co-hosts Gayle King, Anthony Mason and Tony Dokoupil deliver two hours of original reporting, breaking news and top-level newsmaker interviews in an engaging and informative format that challenges the norm in network morning news programs. The broadcast has earned a prestigious Peabody Award, a Polk Award, four News & Documentary Emmys, three Daytime Emmys and the 2017 Edward R. Murrow Award for Best Newscast. The broadcast was also honored with an Alfred I. duPont-Columbia Award as part of CBS News division-wide coverage of the shootings at Sandy Hook Elementary School in Newtown, Connecticut. Check local listings for "CBS This Morning" broadcast times.',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/CkTVoLamPio/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/CkTVoLamPio/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/CkTVoLamPio/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/CkTVoLamPio/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/CkTVoLamPio/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'CBS This Morning',
        tags: [
          'cbs this morning',
          'duchess of sussex',
          'Meghan Markle',
          'thomas markle',
          'prince harry',
          'sitdown',
          'Oprah Winfrey',
        ],
        categoryId: '25',
        liveBroadcastContent: 'none',
        localized: {
          title: 'Meghan, Duchess of Sussex, opens up about her family',
          description:
            'For the first time Meghan, Duchess of Sussex, publicly discusses her father Thomas Markle and her half-sister\'s forthcoming tell-all book in this previously unaired clip from her and Prince Harry\'s sit-down with Oprah Winfrey. Watch Oprah\'s full primetime special with Meghan and Prince Harry here: https://bit.ly/3t24kAK\n\nSubscribe to the "CBS This Morning" YouTube channel: https://bit.ly/3ceNNCX\nWatch more "CBS This Morning": http://bit.ly/1T88yAR\nLike "CBS This Morning" on Facebook: https://on.fb.me/1LhtdvI\nFollow "CBS This Morning" on Instagram: https://bit.ly/1Q7NGnY\nFollow "CBS This Morning" on Twitter: https://bit.ly/1Xj5W3p\nFollow CBS News on Twitter: https://bit.ly/3bdNXek\n\nGet the latest news and best in original reporting from CBS News delivered to your inbox. Sign up for newsletters: https://cbsn.ws/1RqHw7T\n\nGet your news on the go! Download CBS News mobile apps for Android and iOS: https://cbsn.ws/1Xb1WC8\n\nGet new episodes of shows you love across devices the next day, stream local news live, and watch full seasons of CBS fan favorites and originals anytime, anywhere with Paramount+. Sign up here: https://bit.ly/309gCe2\n\n---\nEach weekday morning, "CBS This Morning" co-hosts Gayle King, Anthony Mason and Tony Dokoupil deliver two hours of original reporting, breaking news and top-level newsmaker interviews in an engaging and informative format that challenges the norm in network morning news programs. The broadcast has earned a prestigious Peabody Award, a Polk Award, four News & Documentary Emmys, three Daytime Emmys and the 2017 Edward R. Murrow Award for Best Newscast. The broadcast was also honored with an Alfred I. duPont-Columbia Award as part of CBS News division-wide coverage of the shootings at Sandy Hook Elementary School in Newtown, Connecticut. Check local listings for "CBS This Morning" broadcast times.',
        },
      },
      statistics: {
        viewCount: '7196201',
        likeCount: '56306',
        dislikeCount: '11627',
        favoriteCount: '0',
        commentCount: '13615',
      },
    },
    {
      kind: 'youtube#video',
      etag: 'f_G8flov4K1RaQYD-EHr-Qw5pko',
      id: 'ir1KIlOioSo',
      snippet: {
        publishedAt: '2021-03-09T23:56:29Z',
        channelId: 'UCzMjRlKVO9XIqH_crIFpi6w',
        title: 'I Troll BadBoyHalo With The Morph Mod',
        description:
          "Skeppy trolls BadBoyHalo with a Minecraft Morph Mod HAHAH\n\nTHANK YOU @BadBoyHalo \n\nToday BadBoyHalo and I are playing Minecraft with a really fun twist LMAO.  I basically told Bad to face me in a building competition in Survival Mode and I proceeded to troll the absolute life out of him. It looks like Bad's house has a creeper infestation - he even burns down a forest out of total frustration. It's okay Bad, it'll be fine.  Featuring awesome and hilarious morph's like the chicken morph,  cow morph, and much more. This video has such chaotic energy HAHAHA. Meow.\n\nFollow My Twitter - @Skeppy\nFollow My Instagram - @Skeppy\n  \nNot Minecraft, But Water Rises or Minecraft, But Lava Rises, or any other but challenge like that. This is just chaotic morphing madness.",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/ir1KIlOioSo/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/ir1KIlOioSo/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/ir1KIlOioSo/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/ir1KIlOioSo/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/ir1KIlOioSo/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'Skeppy',
        tags: [
          'minecraft',
          'mine craft',
          'minecraft youtuber',
          'pg',
          'family friendly',
          'skeppy',
          'minecraft skeppy',
          'no swearing',
          'no cursing',
          'minecraft trolling',
          'minecraft troll',
          'funny minecraft',
          'minecraft mod',
          'minecraft map',
          'parkour',
          'trolling',
          'troll',
          'roleplay',
          'custom',
          'challenge',
          'glitch moments',
          'skeppy face',
          'try not to laugh',
          'bedwars',
          'skywars',
          'hypixel',
          'dream smp',
          'mod minecraft',
          'morph mod',
          'morph mod minecraft',
          'badboyhalo',
          'badboyhalo troll',
        ],
        categoryId: '20',
        liveBroadcastContent: 'none',
        localized: {
          title: 'I Troll BadBoyHalo With The Morph Mod',
          description:
            "Skeppy trolls BadBoyHalo with a Minecraft Morph Mod HAHAH\n\nTHANK YOU @BadBoyHalo \n\nToday BadBoyHalo and I are playing Minecraft with a really fun twist LMAO.  I basically told Bad to face me in a building competition in Survival Mode and I proceeded to troll the absolute life out of him. It looks like Bad's house has a creeper infestation - he even burns down a forest out of total frustration. It's okay Bad, it'll be fine.  Featuring awesome and hilarious morph's like the chicken morph,  cow morph, and much more. This video has such chaotic energy HAHAHA. Meow.\n\nFollow My Twitter - @Skeppy\nFollow My Instagram - @Skeppy\n  \nNot Minecraft, But Water Rises or Minecraft, But Lava Rises, or any other but challenge like that. This is just chaotic morphing madness.",
        },
        defaultAudioLanguage: 'en',
      },
      statistics: {
        viewCount: '1073802',
        likeCount: '82473',
        dislikeCount: '1153',
        favoriteCount: '0',
        commentCount: '5226',
      },
    },
    {
      kind: 'youtube#video',
      etag: 'WReopEaER4wzw5_IKdcVTKZvEAY',
      id: 'qUUloBe5vEo',
      snippet: {
        publishedAt: '2021-03-08T23:00:02Z',
        channelId: 'UCRijo3ddMTht_IHyNSNXpNQ',
        title: 'Longest Dunk Wins',
        description:
          'Slippery Stairs and a GIANT catapult!?! Today\'s battle gets WILD! Thanks to Basketball Arena for sponsoring this video! Download for free here: https://app.adjust.com/cgsyo1z_rec0ncy *Basketball Arena is now hosting a $50k Win Streak Event that ends on March 12th!*\n\n► Thanks for subscribing! - http://bit.ly/SubDudePerfect\u200b\n\n► Subscribe to our DP Plus Channel: http://bit.ly/DPplusSubscribe\n\n► Check out the Bloopers & Behind the Scenes: https://youtu.be/kg16owoO1Dk\n\nMusic by CaiNo: "Best Ever"\n► Click HERE to listen on Spotify - https://open.spotify.com/track/4QXntpOCUp2kCwHamfOEEp?si=qVjg6_tvQZeYEwblZ82q9w\n► Click HERE to listen on Apple Music -  https://music.apple.com/us/album/best-ever/1499620335?i=1499620338\n\n#Battle\nNEXT LEVEL STUFF \n-------------------------------------------\n🎒 NEW Merch - http://bit.ly/DPStore\n🎮 Play our FREE iPhone game! - http://smarturl.it/DudePerfect2\n📱 Text us - (469) 205-7005\n🔔 Hit the bell next to Subscribe so you don\'t miss a video!\n👨🏻\u200d💻 Watch our newest vids! - http://bit.ly/NewDPVids\n📕 Read our Book - "Go Big" - http://amzn.to/OYdZ2s\n\nFollow our Instagrams so we can be best friends \n-------------------------------------------\n🏆 http://Instagram.com/DudePerfect\n🧔🏻 http://Instagram.com/TylerNToney\n👱🏻\u200d♂️ http://Instagram.com/Cody_Jones_\n🙋🏻\u200d♂️ http://Instagram.com/CobyCotton\n👨\u200d🦰 http://Instagram.com/GarrettHilbert\n⛹🏻\u200d♂️ http://Instagram.com/CoryCotton\n-------------------------------------------\n“Best Ever”\nPerformed by CaiNo\nCourtesy of Black Toast Music, LLC\nWritten by Marcus Cohen and Scott Horton\n©2020 Black Toast Music (BMI) / Burnt Toast Music (ASCAP)\n-------------------------------------------\nBonus points if you\'re still reading this! \nComment: How well would you do on the slippery stairs!?\n\nClick here to learn more about Dude Perfect:\nhttp://bit.ly/AboutDudePerfect\n\nAs always...Go Big and God Bless!\n- Your friends at Dude Perfect\n\nBusiness or Media, please contact us at: \nDude@DudePerfect.com\n\n------------\n\n5 Best Friends and a Panda.\nIf you like Sports + Comedy, come join the Dude Perfect team!\n\nBest known for trick shots, stereotypes, battles, bottle flips, ping pong shots and all-around competitive fun, Dude Perfect prides ourselves in making the absolute best family-friendly entertainment possible! Welcome to the crew! \n\nPound it 👊🏻 Noggin 🙇🏻\u200d♂️ \n- Dude Perfect',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/qUUloBe5vEo/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/qUUloBe5vEo/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/qUUloBe5vEo/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Dude Perfect',
        tags: [
          'dude perfect',
          'dude perfect stereotypes',
          'dude perfect water bottle flip',
          'bottle flip',
          'water bottle flip',
          'dude perfect bottle flip',
          'dude perfect basketball',
          'dp',
          'dude perfect world record',
          'edition',
          'nerf',
          'trick shots',
          'trick shot',
          'family',
          'ping pong',
          'bowling',
          'clean',
          'family friendly',
          'bubble wrap',
          'soccer',
          'football',
          'spinner',
          'spinners',
          'fidget spinners',
          'dude',
          'slippery',
          'stairs',
          'giant',
          'catapult',
          'trebuchet',
          'launch',
          'dunk',
          'longest',
          'farthest',
          'wins',
          'battle',
          'coby',
          'cory',
          'finale',
          'michael',
          'jordan',
          'mj',
          'slip',
          'fall',
          'funny',
          'trending',
        ],
        categoryId: '17',
        liveBroadcastContent: 'none',
        localized: {
          title: 'Longest Dunk Wins',
          description:
            'Slippery Stairs and a GIANT catapult!?! Today\'s battle gets WILD! Thanks to Basketball Arena for sponsoring this video! Download for free here: https://app.adjust.com/cgsyo1z_rec0ncy *Basketball Arena is now hosting a $50k Win Streak Event that ends on March 12th!*\n\n► Thanks for subscribing! - http://bit.ly/SubDudePerfect\u200b\n\n► Subscribe to our DP Plus Channel: http://bit.ly/DPplusSubscribe\n\n► Check out the Bloopers & Behind the Scenes: https://youtu.be/kg16owoO1Dk\n\nMusic by CaiNo: "Best Ever"\n► Click HERE to listen on Spotify - https://open.spotify.com/track/4QXntpOCUp2kCwHamfOEEp?si=qVjg6_tvQZeYEwblZ82q9w\n► Click HERE to listen on Apple Music -  https://music.apple.com/us/album/best-ever/1499620335?i=1499620338\n\n#Battle\nNEXT LEVEL STUFF \n-------------------------------------------\n🎒 NEW Merch - http://bit.ly/DPStore\n🎮 Play our FREE iPhone game! - http://smarturl.it/DudePerfect2\n📱 Text us - (469) 205-7005\n🔔 Hit the bell next to Subscribe so you don\'t miss a video!\n👨🏻\u200d💻 Watch our newest vids! - http://bit.ly/NewDPVids\n📕 Read our Book - "Go Big" - http://amzn.to/OYdZ2s\n\nFollow our Instagrams so we can be best friends \n-------------------------------------------\n🏆 http://Instagram.com/DudePerfect\n🧔🏻 http://Instagram.com/TylerNToney\n👱🏻\u200d♂️ http://Instagram.com/Cody_Jones_\n🙋🏻\u200d♂️ http://Instagram.com/CobyCotton\n👨\u200d🦰 http://Instagram.com/GarrettHilbert\n⛹🏻\u200d♂️ http://Instagram.com/CoryCotton\n-------------------------------------------\n“Best Ever”\nPerformed by CaiNo\nCourtesy of Black Toast Music, LLC\nWritten by Marcus Cohen and Scott Horton\n©2020 Black Toast Music (BMI) / Burnt Toast Music (ASCAP)\n-------------------------------------------\nBonus points if you\'re still reading this! \nComment: How well would you do on the slippery stairs!?\n\nClick here to learn more about Dude Perfect:\nhttp://bit.ly/AboutDudePerfect\n\nAs always...Go Big and God Bless!\n- Your friends at Dude Perfect\n\nBusiness or Media, please contact us at: \nDude@DudePerfect.com\n\n------------\n\n5 Best Friends and a Panda.\nIf you like Sports + Comedy, come join the Dude Perfect team!\n\nBest known for trick shots, stereotypes, battles, bottle flips, ping pong shots and all-around competitive fun, Dude Perfect prides ourselves in making the absolute best family-friendly entertainment possible! Welcome to the crew! \n\nPound it 👊🏻 Noggin 🙇🏻\u200d♂️ \n- Dude Perfect',
        },
        defaultAudioLanguage: 'en',
      },
      statistics: {
        viewCount: '8592055',
        likeCount: '410780',
        dislikeCount: '5003',
        favoriteCount: '0',
        commentCount: '14506',
      },
    },
    {
      kind: 'youtube#video',
      etag: 'kACvbiSxhBV5gsr1M4niYfXA9dY',
      id: 'VB_GWz25B3Q',
      snippet: {
        publishedAt: '2021-03-09T14:59:36Z',
        channelId: 'UCsXVk37bltHxD1rDPwtNM8Q',
        title: 'What if the World turned to Gold? - The Gold Apocalypse',
        description:
          'The Map of Evolution and other sciency posters, researched and designed with love, are now available on the kurzgesagt shop. \nYour purchase will support us directly and keep our videos free for everyone. \n►► https://shop.kurzgesagt.org\n(Worldwide Shipping Available)\n\nSources & further reading:\nhttps://sites.google.com/view/sources-goldapocalypse/\n\nLet us explore the scientific mystery of what would happen to you, if Earth suddenly turned into gold! The “Midaspocalypse”, based on the ancient tale of King Midas who was cursed so everything he touched turned into gold. \n\nOUR CHANNELS\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\nGerman Channel: https://kgs.link/youtubeDE \nSpanish Channel: https://kgs.link/youtubeES \n\n\nHOW CAN YOU SUPPORT US?\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\nThis is how we make our living and it would be a pleasure if you support us!\n\nGet Merch designed with ❤ from https://kgs.link/shop  \nJoin the Patreon Bird Army 🐧 https://kgs.link/patreon  \n\n\nDISCUSSIONS & SOCIAL MEDIA\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\nReddit:            https://kgs.link/reddit\nInstagram:     https://kgs.link/instagram\nTwitter:           https://kgs.link/twitter\nFacebook:      https://kgs.link/facebook\nDiscord:          https://kgs.link/discord\nNewsletter:    https://kgs.link/newsletter\n\n\nOUR VOICE\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\nThe Kurzgesagt voice is from \nSteve Taylor:  https://kgs.link/youtube-voice\n\n\nOUR MUSIC ♬♪\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\n700+ minutes of Kurzgesagt Soundtracks by Epic Mountain:\n\nSpotify:            https://kgs.link/music-spotify\nSoundcloud:   https://kgs.link/music-soundcloud\nBandcamp:     https://kgs.link/music-bandcamp\nYoutube:          https://kgs.link/music-youtube\nFacebook:       https://kgs.link/music-facebook\n\nThe Soundtrack of this video:\n\nSoundcloud:   https://bit.ly/3uC1UdP\nBandcamp:     https://bit.ly/3rafoeA\n\n\n🐦🐧🐤 PATREON BIRD ARMY 🐤🐧🐦\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\nMany Thanks to our wonderful Patreons from http://kgs.link/patreon who support us every month and made this video possible:\n\nKarthik Ramasamy, Vladan Lausevic, Glenn Green, Austin Millan, Wyton Chu, Gintare Petraityte, Cédric Marchal, Stacey Shpaner, Marko Cukovic, Misha Suksnguan, Christina Mansson, yem, Patrick Lathrop, Ben Saward, Igor Shevchenko, Eugen Schiller, Kamran Hassan, SrirachaSeahawk, Andrew Morse, Nick Wharff, Aleksander Lis, Andrew Conner, Linda Massie, R Armstrong, Garrett Krest, Vector-Dopamine math, James McMeeking, tuxlu, Matthew Gunn, Benjamin Lois, Xiaohan Ma, Yu Li, Fernadno, Memo Akten, Wrong_Dongle, วงศกร นันทวิชิต, Jose Mejia, Jacob B., gingerninja, Ondrej Priečinský, Leo MacMitchell, Mehran Ziadloo, Milan Mladoniczky, Jonathan Beranger, Jessie Childers, Joan Zak, Danil, Plinzler, landon, Patrick Jones, Ahmed Sultan, Ethan Holland, Ralitsa Tsoneva, David Lindvall, Bryan Roscoe, Jason aka Kypzethdurron, Christopher R. Collins, Jason Meyer, Patrick Frank, Anne Commons, James Moffatt, Emma Phillips, KoblerMan, Michael Wolfe, Kristian Küng, Morten Berg, Cristian Klein, Athletic Interest, Nomvitch, Team HAM, planloskreativ, Martin Lange',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/VB_GWz25B3Q/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/VB_GWz25B3Q/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/VB_GWz25B3Q/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/VB_GWz25B3Q/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/VB_GWz25B3Q/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'Kurzgesagt – In a Nutshell',
        categoryId: '27',
        liveBroadcastContent: 'none',
        defaultLanguage: 'en-GB',
        localized: {
          title: 'What if the World turned to Gold? - The Gold Apocalypse',
          description:
            'The Map of Evolution and other sciency posters, researched and designed with love, are now available on the kurzgesagt shop. \nYour purchase will support us directly and keep our videos free for everyone. \n►► https://shop.kurzgesagt.org\n(Worldwide Shipping Available)\n\nSources & further reading:\nhttps://sites.google.com/view/sources-goldapocalypse/\n\nLet us explore the scientific mystery of what would happen to you, if Earth suddenly turned into gold! The “Midaspocalypse”, based on the ancient tale of King Midas who was cursed so everything he touched turned into gold. \n\nOUR CHANNELS\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\nGerman Channel: https://kgs.link/youtubeDE \nSpanish Channel: https://kgs.link/youtubeES \n\n\nHOW CAN YOU SUPPORT US?\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\nThis is how we make our living and it would be a pleasure if you support us!\n\nGet Merch designed with ❤ from https://kgs.link/shop  \nJoin the Patreon Bird Army 🐧 https://kgs.link/patreon  \n\n\nDISCUSSIONS & SOCIAL MEDIA\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\nReddit:            https://kgs.link/reddit\nInstagram:     https://kgs.link/instagram\nTwitter:           https://kgs.link/twitter\nFacebook:      https://kgs.link/facebook\nDiscord:          https://kgs.link/discord\nNewsletter:    https://kgs.link/newsletter\n\n\nOUR VOICE\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\nThe Kurzgesagt voice is from \nSteve Taylor:  https://kgs.link/youtube-voice\n\n\nOUR MUSIC ♬♪\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\n700+ minutes of Kurzgesagt Soundtracks by Epic Mountain:\n\nSpotify:            https://kgs.link/music-spotify\nSoundcloud:   https://kgs.link/music-soundcloud\nBandcamp:     https://kgs.link/music-bandcamp\nYoutube:          https://kgs.link/music-youtube\nFacebook:       https://kgs.link/music-facebook\n\nThe Soundtrack of this video:\n\nSoundcloud:   https://bit.ly/3uC1UdP\nBandcamp:     https://bit.ly/3rafoeA\n\n\n🐦🐧🐤 PATREON BIRD ARMY 🐤🐧🐦\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\nMany Thanks to our wonderful Patreons from http://kgs.link/patreon who support us every month and made this video possible:\n\nKarthik Ramasamy, Vladan Lausevic, Glenn Green, Austin Millan, Wyton Chu, Gintare Petraityte, Cédric Marchal, Stacey Shpaner, Marko Cukovic, Misha Suksnguan, Christina Mansson, yem, Patrick Lathrop, Ben Saward, Igor Shevchenko, Eugen Schiller, Kamran Hassan, SrirachaSeahawk, Andrew Morse, Nick Wharff, Aleksander Lis, Andrew Conner, Linda Massie, R Armstrong, Garrett Krest, Vector-Dopamine math, James McMeeking, tuxlu, Matthew Gunn, Benjamin Lois, Xiaohan Ma, Yu Li, Fernadno, Memo Akten, Wrong_Dongle, วงศกร นันทวิชิต, Jose Mejia, Jacob B., gingerninja, Ondrej Priečinský, Leo MacMitchell, Mehran Ziadloo, Milan Mladoniczky, Jonathan Beranger, Jessie Childers, Joan Zak, Danil, Plinzler, landon, Patrick Jones, Ahmed Sultan, Ethan Holland, Ralitsa Tsoneva, David Lindvall, Bryan Roscoe, Jason aka Kypzethdurron, Christopher R. Collins, Jason Meyer, Patrick Frank, Anne Commons, James Moffatt, Emma Phillips, KoblerMan, Michael Wolfe, Kristian Küng, Morten Berg, Cristian Klein, Athletic Interest, Nomvitch, Team HAM, planloskreativ, Martin Lange',
        },
        defaultAudioLanguage: 'en',
      },
      statistics: {
        viewCount: '2335505',
        likeCount: '230568',
        dislikeCount: '2702',
        favoriteCount: '0',
        commentCount: '19229',
      },
    },
    {
      kind: 'youtube#video',
      etag: 'WNhvLrEC7acx9-3Bl94-YSMdG94',
      id: '2lfBYyQ2xjo',
      snippet: {
        publishedAt: '2021-03-09T23:08:35Z',
        channelId: 'UCET00YnetHT7tOpu12v8jxg',
        title: 'Juventus vs. Porto: Extended Highlights | UCL on CBS Sports',
        description:
          'Juventus won the second leg 3-2, but Porto move on to the quarterfinal round thanks to away goals. Sergio Oliveira was the savior for Porto notching goals in the 19’ by way of penalty and in the 115’ to all but seal the win. \n\nChiesa notched goals in the 49’ and 63’ to get the offense going for Juventus. After Porto evened it up at 2, Rabiot found the back of the net just two minutes later to give Juventus some hope with three minutes remaining. Juventus almost rallied to score a stoppage time goal in extra time, however Porto’s defense stiffened and got rid of the threat. \n\nPorto who was undermanned after Mehdi Taremi was sent off in the 54’ still managed to knock off the traditional power and make some waves in the UEFA Champions League.\n\nStream every UEFA Champions League match live on Paramount+:\nhttps://www.paramountplus.com/shows/uefa-champions-league/\n\n#UEFA #UCL #ChampionsLEague #Juventus #Porto #ExtraTime',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/2lfBYyQ2xjo/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/2lfBYyQ2xjo/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/2lfBYyQ2xjo/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/2lfBYyQ2xjo/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/2lfBYyQ2xjo/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'Champions League on CBS Sports',
        tags: ['Juventus', 'FC Porto', 'Juventus vs. FC Porto'],
        categoryId: '17',
        liveBroadcastContent: 'none',
        localized: {
          title: 'Juventus vs. Porto: Extended Highlights | UCL on CBS Sports',
          description:
            'Juventus won the second leg 3-2, but Porto move on to the quarterfinal round thanks to away goals. Sergio Oliveira was the savior for Porto notching goals in the 19’ by way of penalty and in the 115’ to all but seal the win. \n\nChiesa notched goals in the 49’ and 63’ to get the offense going for Juventus. After Porto evened it up at 2, Rabiot found the back of the net just two minutes later to give Juventus some hope with three minutes remaining. Juventus almost rallied to score a stoppage time goal in extra time, however Porto’s defense stiffened and got rid of the threat. \n\nPorto who was undermanned after Mehdi Taremi was sent off in the 54’ still managed to knock off the traditional power and make some waves in the UEFA Champions League.\n\nStream every UEFA Champions League match live on Paramount+:\nhttps://www.paramountplus.com/shows/uefa-champions-league/\n\n#UEFA #UCL #ChampionsLEague #Juventus #Porto #ExtraTime',
        },
      },
      statistics: {
        viewCount: '848230',
        likeCount: '11098',
        dislikeCount: '337',
        favoriteCount: '0',
        commentCount: '4003',
      },
    },
    {
      kind: 'youtube#video',
      etag: 'yP4pGS5OacLk13Q8FHd_yUBNhxA',
      id: 'HgFzP5m1k_c',
      snippet: {
        publishedAt: '2021-03-09T16:00:05Z',
        channelId: 'UCto7D1L-MiRoOziCXK9uT5Q',
        title: 'I Turned Valheim Into a Physics-Defying Nightmare',
        description:
          "JOIN MY STREAMS! ► https://www.twitch.tv/letsgameitout\n\nMerch!  ►\n  US/CA STORE ► http://bit.ly/LetsGameItOutUSStore\n  EU STORE ► http://bit.ly/LetsGameItOutEUStore\n\nSubscribe if you enjoy! ► http://bit.ly/letsgameitout_show\n\nTwitter ► https://twitter.com/letsgameitout\nFacebook ► https://www.facebook.com/letsgameitout\n\nWant more LGIO?!\n\nMore Simulator Mayhem ► https://www.youtube.com/watch?v=UqaNKNgSxYI&list=PLrBjj4brdIRzn3ja4BfqYUForg0p-p5wi\n\nFunny Tycoon Games ► https://www.youtube.com/watch?v=UqaNKNgSxYI&list=PLrBjj4brdIRwf14QPGmfDXCQQrDs860ig\n\nThe Finest One-Offs ► https://www.youtube.com/watch?v=zIOFGCbwJSs&list=PLrBjj4brdIRwKf72d6spk7fSHhwwYuQu1\n\nSome Truly Bizarre Games  ► https://www.youtube.com/watch?v=zIOFGCbwJSs&list=PLrBjj4brdIRyM5mUsHwPN0PH6UVNfeNl2\n\n#LetsGameItOut #Simulation #Valheim\n\nI Turned Valheim Into a Physics-Defying Nightmare - Let's Game It Out\n\n----------\n\nCheck it out on Steam ► https://store.steampowered.com/app/892970/Valheim/\n\nMore about Valheim (from Steam):\n\nA battle-slain warrior, the Valkyries have ferried your soul to Valheim, the tenth Norse world. Besieged by creatures of chaos and ancient enemies of the gods, you are the newest custodian of the primordial purgatory, tasked with slaying Odin’s ancient rivals and bringing order to Valheim.\n\nYour trials begin at the disarmingly peaceful centre of Valheim, but the gods reward the brave and glory awaits. Venture forth through imposing forests and snow-capped mountains, explore and harvest more valuable materials to craft deadlier weapons, sturdier armor, viking strongholds and outposts. Build a mighty longship and sail the great oceans in search of exotic lands … but be wary of sailing too far...\n\nKey features:\n- Huge procedurally-generated world - explore and inhabit mystical lands, from mysteriousforests to imposing snow-topped mountain ranges and stunning meadows, complete with their own creatures of legend to battle and wildlife to hunt.\n- Co-op PvE (2-10 players) - - Whether you want to brave the lands alone or venture with trusted allies, Valheim supports independent, player-hosted servers and unlimited world creation. We recommend playing co-op with 3-5 players.\n- Punishing dodge & block based combat system with a wide range of weapons\n- Build & sail ships - from flimsy rafts to imposing warships, build legendary vessels to conquer the seas and discover new lands.\n- Summon and defeat vengeful primordial bosses of myth and legend, and collect trophies to progress and craft new powerful items\n- Flexible house and base building system - raise mead halls, farms, settlements outposts, castles and more.\n- Intuitive item crafting - forge the finest weapons and armour, and craft food and mead.\n- Dedicated server- for players who want to run a persistent server. If you prefer not to run a server on your PC, consider renting a server at G-Portal.",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/HgFzP5m1k_c/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/HgFzP5m1k_c/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/HgFzP5m1k_c/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/HgFzP5m1k_c/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/HgFzP5m1k_c/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "Let's Game It Out",
        tags: [
          "let's game it out",
          'lets game it out',
          'letsgameitout',
          'lgio',
          'lgio josh',
          "josh let's game it out it out",
          'valheim',
          'valheim game',
          "let's game it out valheim",
          "valheim let's game it out",
          "let's game it out survival",
          "let's game it out tycoon",
          'funny moments',
          'valheim gameplay',
          'valheim tips',
          'valheim guide',
        ],
        categoryId: '20',
        liveBroadcastContent: 'none',
        localized: {
          title: 'I Turned Valheim Into a Physics-Defying Nightmare',
          description:
            "JOIN MY STREAMS! ► https://www.twitch.tv/letsgameitout\n\nMerch!  ►\n  US/CA STORE ► http://bit.ly/LetsGameItOutUSStore\n  EU STORE ► http://bit.ly/LetsGameItOutEUStore\n\nSubscribe if you enjoy! ► http://bit.ly/letsgameitout_show\n\nTwitter ► https://twitter.com/letsgameitout\nFacebook ► https://www.facebook.com/letsgameitout\n\nWant more LGIO?!\n\nMore Simulator Mayhem ► https://www.youtube.com/watch?v=UqaNKNgSxYI&list=PLrBjj4brdIRzn3ja4BfqYUForg0p-p5wi\n\nFunny Tycoon Games ► https://www.youtube.com/watch?v=UqaNKNgSxYI&list=PLrBjj4brdIRwf14QPGmfDXCQQrDs860ig\n\nThe Finest One-Offs ► https://www.youtube.com/watch?v=zIOFGCbwJSs&list=PLrBjj4brdIRwKf72d6spk7fSHhwwYuQu1\n\nSome Truly Bizarre Games  ► https://www.youtube.com/watch?v=zIOFGCbwJSs&list=PLrBjj4brdIRyM5mUsHwPN0PH6UVNfeNl2\n\n#LetsGameItOut #Simulation #Valheim\n\nI Turned Valheim Into a Physics-Defying Nightmare - Let's Game It Out\n\n----------\n\nCheck it out on Steam ► https://store.steampowered.com/app/892970/Valheim/\n\nMore about Valheim (from Steam):\n\nA battle-slain warrior, the Valkyries have ferried your soul to Valheim, the tenth Norse world. Besieged by creatures of chaos and ancient enemies of the gods, you are the newest custodian of the primordial purgatory, tasked with slaying Odin’s ancient rivals and bringing order to Valheim.\n\nYour trials begin at the disarmingly peaceful centre of Valheim, but the gods reward the brave and glory awaits. Venture forth through imposing forests and snow-capped mountains, explore and harvest more valuable materials to craft deadlier weapons, sturdier armor, viking strongholds and outposts. Build a mighty longship and sail the great oceans in search of exotic lands … but be wary of sailing too far...\n\nKey features:\n- Huge procedurally-generated world - explore and inhabit mystical lands, from mysteriousforests to imposing snow-topped mountain ranges and stunning meadows, complete with their own creatures of legend to battle and wildlife to hunt.\n- Co-op PvE (2-10 players) - - Whether you want to brave the lands alone or venture with trusted allies, Valheim supports independent, player-hosted servers and unlimited world creation. We recommend playing co-op with 3-5 players.\n- Punishing dodge & block based combat system with a wide range of weapons\n- Build & sail ships - from flimsy rafts to imposing warships, build legendary vessels to conquer the seas and discover new lands.\n- Summon and defeat vengeful primordial bosses of myth and legend, and collect trophies to progress and craft new powerful items\n- Flexible house and base building system - raise mead halls, farms, settlements outposts, castles and more.\n- Intuitive item crafting - forge the finest weapons and armour, and craft food and mead.\n- Dedicated server- for players who want to run a persistent server. If you prefer not to run a server on your PC, consider renting a server at G-Portal.",
        },
        defaultAudioLanguage: 'en',
      },
      statistics: {
        viewCount: '1317220',
        likeCount: '99997',
        dislikeCount: '705',
        favoriteCount: '0',
        commentCount: '6190',
      },
    },
    {
      kind: 'youtube#video',
      etag: '1VWWCx2BlvFRhG5HEpwBU0kNkso',
      id: 'eT6wYbaRrlQ',
      snippet: {
        publishedAt: '2021-03-09T22:16:25Z',
        channelId: 'UC5mPJA4y5G8Z6aNkY6AxgAw',
        title: 'VAN NEISTAT: The Spirited Man',
        description:
          "Glimpse into a spirited man's self-reliant analog world.  Meet a spirited woman, too.\n\nFor an in-depth explanation of this channel:   https://www.kickstarter.com/projects/1767122922/the-spirited-man-series?ref=74nmgl&token=0df6e7c5",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/eT6wYbaRrlQ/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/eT6wYbaRrlQ/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/eT6wYbaRrlQ/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/eT6wYbaRrlQ/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/eT6wYbaRrlQ/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'Van Neistat',
        tags: ['4-18-16'],
        categoryId: '1',
        liveBroadcastContent: 'none',
        localized: {
          title: 'VAN NEISTAT: The Spirited Man',
          description:
            "Glimpse into a spirited man's self-reliant analog world.  Meet a spirited woman, too.\n\nFor an in-depth explanation of this channel:   https://www.kickstarter.com/projects/1767122922/the-spirited-man-series?ref=74nmgl&token=0df6e7c5",
        },
      },
      statistics: {
        viewCount: '254020',
        likeCount: '39028',
        dislikeCount: '185',
        favoriteCount: '0',
        commentCount: '2780',
      },
    },
    {
      kind: 'youtube#video',
      etag: 'tveLCSrPg4FbSgldDhcODabrM68',
      id: 'mxnGGyH2_Is',
      snippet: {
        publishedAt: '2021-03-09T13:00:23Z',
        channelId: 'UCIVSqoHCUN1XdEpiVItxfoQ',
        title: "I Spent 300 Days in ONE BLOCK Minecraft... Here's What Happened",
        description:
          'I Spent 300 Days in ONE BLOCK Minecraft\nI Spent 300 Days in ONE BLOCK Skyblock\nJOIN MY ONE BLOCK SKYBLOCK SERVER: cookie.oneblockmc.com\nHow to join One Block: https://oneblockmc.com/play\n\n» SUBSCRIBE TO MY SECOND CHANNEL:\n✔ https://www.youtube.com/channel/UCMfADVjndQ4w9-CQvQZaL_g\n\n➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖\n\nCOOKIE\'S SOCIAL MEDIA:\n\n» Second Channel: https://www.youtube.com/channel/UCMfADVjndQ4w9-CQvQZaL_g\n» Discord Server: https://discord.gg/xyyGMez\n» Twitter: https://twitter.com/aCookieGod\n» Subscribe: https://www.youtube.com/channel/UCIVSqoHCUN1XdEpiVItxfoQ?sub_confirmation=1\n\n➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖\n\n》ONE BLOCK SERIES:\n✔ 100 Days: https://youtu.be/NnM24Ed2uK4\n✔ 200 Days: https://youtu.be/0bORiBtbRJ8\n\n》We Spent 100 Days in Minecraft PIXELMON:\n✔ https://youtu.be/UosoE8aS-p0\n\n➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖\n\n》 Music from Epidemic Sounds\n》"100 Days" Inspired by @Luke TheNotable\u200b \n》"One Block Skyblock" Inspired by @WadZee\u200b @Aphmau\u200b @UnspeakableGaming\u200b @Unspeakable\u200b \n》"OneBlock" Map Download by  @IJAMinecraft\u200b \n\nThank you for clicking on this video and for watching! I have more awesome videos, so go watch them. Also, drop a like & comment, I respond to all my comments! ❤️️\n\n#300days #minecraftoneblock #oneblockskyblock',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/mxnGGyH2_Is/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/mxnGGyH2_Is/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/mxnGGyH2_Is/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/mxnGGyH2_Is/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/mxnGGyH2_Is/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'aCookieGod',
        tags: [
          '300 days in minecraft',
          'minecraft 300 days',
          'i spent 300 days in minecraft',
          'acookiegod',
          'acookiegod minecraft',
          'a cookie god',
          'i spent 300 days in one block minecraft',
          'i survived 300 days in one block minecraft',
          'i spent 300 days in one block skyblock',
          '300 days but you only get one block',
          'surviving 300 days on one block',
          'minecraft 300 days in one block skyblock',
          '300 days one block survival',
          '300 days on one block',
          '300 days but its one block',
          'acookiegod one block',
          'acookiegod 300 days',
        ],
        categoryId: '20',
        liveBroadcastContent: 'none',
        localized: {
          title: "I Spent 300 Days in ONE BLOCK Minecraft... Here's What Happened",
          description:
            'I Spent 300 Days in ONE BLOCK Minecraft\nI Spent 300 Days in ONE BLOCK Skyblock\nJOIN MY ONE BLOCK SKYBLOCK SERVER: cookie.oneblockmc.com\nHow to join One Block: https://oneblockmc.com/play\n\n» SUBSCRIBE TO MY SECOND CHANNEL:\n✔ https://www.youtube.com/channel/UCMfADVjndQ4w9-CQvQZaL_g\n\n➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖\n\nCOOKIE\'S SOCIAL MEDIA:\n\n» Second Channel: https://www.youtube.com/channel/UCMfADVjndQ4w9-CQvQZaL_g\n» Discord Server: https://discord.gg/xyyGMez\n» Twitter: https://twitter.com/aCookieGod\n» Subscribe: https://www.youtube.com/channel/UCIVSqoHCUN1XdEpiVItxfoQ?sub_confirmation=1\n\n➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖\n\n》ONE BLOCK SERIES:\n✔ 100 Days: https://youtu.be/NnM24Ed2uK4\n✔ 200 Days: https://youtu.be/0bORiBtbRJ8\n\n》We Spent 100 Days in Minecraft PIXELMON:\n✔ https://youtu.be/UosoE8aS-p0\n\n➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖\n\n》 Music from Epidemic Sounds\n》"100 Days" Inspired by @Luke TheNotable\u200b \n》"One Block Skyblock" Inspired by @WadZee\u200b @Aphmau\u200b @UnspeakableGaming\u200b @Unspeakable\u200b \n》"OneBlock" Map Download by  @IJAMinecraft\u200b \n\nThank you for clicking on this video and for watching! I have more awesome videos, so go watch them. Also, drop a like & comment, I respond to all my comments! ❤️️\n\n#300days #minecraftoneblock #oneblockskyblock',
        },
        defaultAudioLanguage: 'en-US',
      },
      statistics: {
        viewCount: '1390746',
        likeCount: '81205',
        dislikeCount: '1181',
        favoriteCount: '0',
        commentCount: '23032',
      },
    },
    {
      kind: 'youtube#video',
      etag: 'qCvOw1tojWYQC1A7IQ1Dh8cq-Vo',
      id: 'Ooga5KqtkMo',
      snippet: {
        publishedAt: '2021-03-09T22:42:52Z',
        channelId: 'UCXJryYh6xcW5iEeJGzK191A',
        title:
          'Miami Heat Player Meyers Leonard Uses Anti-Semitic Slur While Streaming Video Game',
        description:
          'The team is aware of the video and the NBA is also looking into it.',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/Ooga5KqtkMo/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/Ooga5KqtkMo/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/Ooga5KqtkMo/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/Ooga5KqtkMo/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/Ooga5KqtkMo/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'CBS Miami',
        tags: [
          'CBS 4 News Evening',
          'Miami Heat',
          'Meyers Leonard',
          'Anti-Semitic Slur',
          'Call of Duty',
          'Twitch Stream',
          'Local TV',
          'Miami News',
        ],
        categoryId: '25',
        liveBroadcastContent: 'none',
        localized: {
          title:
            'Miami Heat Player Meyers Leonard Uses Anti-Semitic Slur While Streaming Video Game',
          description:
            'The team is aware of the video and the NBA is also looking into it.',
        },
        defaultAudioLanguage: 'en',
      },
      statistics: {
        viewCount: '333318',
        likeCount: '2053',
        dislikeCount: '360',
        favoriteCount: '0',
        commentCount: '1535',
      },
    },
    {
      kind: 'youtube#video',
      etag: 'Q-g_6ohCsfTlsuoDfKEQDlYcumA',
      id: 'K96S2qroRN4',
      snippet: {
        publishedAt: '2021-03-09T22:16:11Z',
        channelId: 'UC5mPJA4y5G8Z6aNkY6AxgAw',
        title: "I'M LAUNCHING A YOUTUBE CHANNEL by Van Neistat",
        description:
          'A solution to focusing on yourself when your camera is out of reach\n\nFor an in-depth explanation of this channel:   https://www.kickstarter.com/projects/1767122922/the-spirited-man-series?ref=74nmgl&token=0df6e7c5',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/K96S2qroRN4/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/K96S2qroRN4/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/K96S2qroRN4/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/K96S2qroRN4/sddefault.jpg',
            width: 640,
            height: 480,
          },
        },
        channelTitle: 'Van Neistat',
        tags: ['4-18-16'],
        categoryId: '1',
        liveBroadcastContent: 'none',
        localized: {
          title: "I'M LAUNCHING A YOUTUBE CHANNEL by Van Neistat",
          description:
            'A solution to focusing on yourself when your camera is out of reach\n\nFor an in-depth explanation of this channel:   https://www.kickstarter.com/projects/1767122922/the-spirited-man-series?ref=74nmgl&token=0df6e7c5',
        },
      },
      statistics: {
        viewCount: '177751',
        likeCount: '15156',
        dislikeCount: '80',
        favoriteCount: '0',
        commentCount: '1058',
      },
    },
    {
      kind: 'youtube#video',
      etag: '5fKUX7RBooUJYKxClzHf1rFV3fQ',
      id: 'w0bU-l__BPs',
      snippet: {
        publishedAt: '2021-03-09T15:16:05Z',
        channelId: 'UCHd62-u_v4DvJ8TCFtpi4GA',
        title:
          'Piers Morgan storms off set after confrontation over his attacks on royal couple',
        description:
          'Commentators and politicians in Britain and the United States on March 8 said the revelations in Harry and Meghan’s  interview with Oprah Winfrey were a “bombshell” and “shocking.” Read more: https://wapo.st/30ufZfk. Subscribe to The Washington Post on YouTube: https://wapo.st/2QOdcqK\n\nFollow us:\nTwitter: https://twitter.com/washingtonpost\nInstagram: https://www.instagram.com/washingtonpost/\nFacebook: https://www.facebook.com/washingtonpost/',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/w0bU-l__BPs/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/w0bU-l__BPs/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/w0bU-l__BPs/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/w0bU-l__BPs/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/w0bU-l__BPs/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'Washington Post',
        tags: [
          'piers morgan storms off set',
          'piers morgan',
          'gmb',
          'washington post',
          'good morning britain',
          'piers morgan meghan markle',
          'meghan markle',
          'prince harry',
          'royal family',
          'Washington Post Video',
          'News',
          'WaPo Video',
          'Washington Post YouTube',
          'The Washington Post',
          'a:world',
          't:Original',
          's:World',
          'good morning britain interview',
          'talk shows - topic',
          'susanna reid',
          'piers morgan storms off',
          'piers morgan walks off',
          'piers morgan angry moments',
          'piers morgan moments',
        ],
        categoryId: '25',
        liveBroadcastContent: 'none',
        localized: {
          title:
            'Piers Morgan storms off set after confrontation over his attacks on royal couple',
          description:
            'Commentators and politicians in Britain and the United States on March 8 said the revelations in Harry and Meghan’s  interview with Oprah Winfrey were a “bombshell” and “shocking.” Read more: https://wapo.st/30ufZfk. Subscribe to The Washington Post on YouTube: https://wapo.st/2QOdcqK\n\nFollow us:\nTwitter: https://twitter.com/washingtonpost\nInstagram: https://www.instagram.com/washingtonpost/\nFacebook: https://www.facebook.com/washingtonpost/',
        },
      },
      statistics: {
        viewCount: '819496',
        likeCount: '5999',
        dislikeCount: '496',
        favoriteCount: '0',
        commentCount: '3176',
      },
    },
    {
      kind: 'youtube#video',
      etag: 'a6LhLRoL54Iewnw66c4yXTSx0Xo',
      id: 'CaZ5LhUbFng',
      snippet: {
        publishedAt: '2021-03-09T17:58:28Z',
        channelId: 'UCZ8Sxmkweh65HetaZfR8YuA',
        title:
          'Piers Morgan Walks Off Set After Being Called Out Over Meghan Markle Comments | THR News',
        description:
          "Piers Morgan stormed off the set of his own morning show in the U.K. after a colleague called him out for his rants against Meghan Markle and Prince Harry following their bombshell interview with Oprah Winfrey.\n\n►►Subscribe for more entertainment news: http://thr.cm/dwtPxG2\n►► See our latest videos: http://thr.cm/syLedfw\n\nAbout: The Hollywood Reporter (THR) is the entertainment industry's flagship media brand, offering in-depth reporting, analysis, unparalleled access, world-class photography and video, and feature exclusives in its award-winning weekly magazine and dynamic website. The Hollywood Reporter also boasts prestigious live events, industry-leading philanthropic, empowerment and diversity initiatives and hugely successful video series.\n\nConnect with The Hollywood Reporter Online:\nVisit the website: http://thr.cm/MgwCFl9\nLikes us on Facebook: http://thr.cm/ngIBL8l\nFollow us on Twitter: http://thr.cm/2S875k7\nFollow us on Instagram: http://thr.cm/cDQoWQd\n\n#PiersMorgan #MeghanMarkle #THRNews\n\nPiers Morgan Walks Off Set After Being Called Out Over Meghan Markle Comments | THR News\n\nThe Hollywood Reporter\nhttps://youtube.com/hollywoodreporter",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/CaZ5LhUbFng/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/CaZ5LhUbFng/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/CaZ5LhUbFng/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/CaZ5LhUbFng/sddefault.jpg',
            width: 640,
            height: 480,
          },
        },
        channelTitle: 'The Hollywood Reporter',
        tags: [
          'thr',
          'the hollywood reporter',
          'hollywood reporter',
          'entertainment',
          'hollywood',
          'Thr news',
          'the Hollywood reporter',
          '2021',
          'piers morgan',
          'meghan markle',
          'prince harry',
          'oprah winfrey',
          'good morning Britain',
          'oprah with meghan and harry',
          'oprah meghan harry interview',
          'interview',
          'meghan markle interview',
          'piers morgan meghan markle',
          'piers morgan meghan markle comments',
          'tv',
          'television',
          'alex Beresford',
          'alex beresfod piers morgan',
          'piers',
          'piers morgan walk off',
        ],
        categoryId: '24',
        liveBroadcastContent: 'none',
        defaultLanguage: 'en',
        localized: {
          title:
            'Piers Morgan Walks Off Set After Being Called Out Over Meghan Markle Comments | THR News',
          description:
            "Piers Morgan stormed off the set of his own morning show in the U.K. after a colleague called him out for his rants against Meghan Markle and Prince Harry following their bombshell interview with Oprah Winfrey.\n\n►►Subscribe for more entertainment news: http://thr.cm/dwtPxG2\n►► See our latest videos: http://thr.cm/syLedfw\n\nAbout: The Hollywood Reporter (THR) is the entertainment industry's flagship media brand, offering in-depth reporting, analysis, unparalleled access, world-class photography and video, and feature exclusives in its award-winning weekly magazine and dynamic website. The Hollywood Reporter also boasts prestigious live events, industry-leading philanthropic, empowerment and diversity initiatives and hugely successful video series.\n\nConnect with The Hollywood Reporter Online:\nVisit the website: http://thr.cm/MgwCFl9\nLikes us on Facebook: http://thr.cm/ngIBL8l\nFollow us on Twitter: http://thr.cm/2S875k7\nFollow us on Instagram: http://thr.cm/cDQoWQd\n\n#PiersMorgan #MeghanMarkle #THRNews\n\nPiers Morgan Walks Off Set After Being Called Out Over Meghan Markle Comments | THR News\n\nThe Hollywood Reporter\nhttps://youtube.com/hollywoodreporter",
        },
        defaultAudioLanguage: 'en',
      },
      statistics: {
        viewCount: '956887',
        likeCount: '5658',
        dislikeCount: '963',
        favoriteCount: '0',
        commentCount: '3283',
      },
    },
    {
      kind: 'youtube#video',
      etag: 'lL3ZQZXaWMxUjbTwKRi5Lw1fxW4',
      id: 'kg16owoO1Dk',
      snippet: {
        publishedAt: '2021-03-08T23:00:33Z',
        channelId: 'UCmo9ZEJ3ipgaZdkiRRYtLAg',
        title: 'Longest Dunk Wins (Bloopers & Behind The Scenes)',
        description:
          'Everything you love about Dude Perfect.. plus even more!  Be sure to SUBSCRIBE for more behind the scenes, bloopers, and bonus content! ► CLICK HERE: http://bit.ly/DPplusSubscribe\n\n► Click HERE to watch the main video: https://youtu.be/qUUloBe5vEo\n\n► Click HERE to watch more Behind the Scenes on Dude Perfect Plus: https://www.youtube.com/watch?v=XBh4bnd51c4&list=PLC_fTveW0jTZ-jc2LqY4dvhpyYSuPgNB7&ab_channel=DudePerfectPlus\n\nNEXT LEVEL STUFF \n-------------------------------------------\n🎒 NEW Merch - bit.ly/DPStore\n🎮 Play our FREE iPhone game! - http://smarturl.it/DudePerfect2\n📱 Text us - (469) 205-7005\n🔔 Hit the bell next to Subscribe so you don\'t miss a video!\n👨🏻\u200d💻 Watch our newest vids! - http://bit.ly/NewDPVids\n📕 Read our Book - "Go Big" - http://amzn.to/OYdZ2s\n\nFollow our Instagrams so we can be best friends \n-------------------------------------------\n🏆 http://Instagram.com/DudePerfect\n🧔🏻 http://Instagram.com/TylerNToney\n👱🏻\u200d♂️ http://Instagram.com/Cody_Jones_\n🙋🏻\u200d♂️ http://Instagram.com/CobyCotton\n👨\u200d🦰 http://Instagram.com/GarrettHilbert\n⛹🏻\u200d♂️ http://Instagram.com/CoryCotton\n-------------------------------------------\nBonus points if you\'re still reading this! \nComment: Ryan is a DP prop wizard!\n\nClick here to learn more about Dude Perfect:\nhttp://bit.ly/AboutDudePerfect\n\nAs always...Go Big and God Bless!\n- Your friends at Dude Perfect\n\nBusiness or Media, please contact us at: \nDude@DudePerfect.com\n------------\n\n5 Best Friends and a Panda.\nIf you like Sports + Comedy, come join the Dude Perfect team!\n\nBest known for trick shots, stereotypes, battles, bottle flips, ping pong shots and all-around competitive fun, Dude Perfect prides ourselves in making the absolute best family-friendly entertainment possible! Welcome to the crew! \n\nPound it 👊🏻 Noggin 🙇🏻\u200d♂️ \n- Dude Perfect',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/kg16owoO1Dk/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/kg16owoO1Dk/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/kg16owoO1Dk/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/kg16owoO1Dk/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/kg16owoO1Dk/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'Dude Perfect Plus',
        tags: [
          'dude',
          'perfect',
          'plus',
          'bonus',
          'bts',
          'behind',
          'the',
          'scenes',
          'extra',
          'compilation',
          'dp',
          'editors',
          'funny',
          'bloopers',
          'deleted',
          'family',
          'team',
          'trick',
          'shot',
          'shots',
          'battle',
          'stereotype',
          'overtime',
          'sparky',
          'tyler',
          'cory',
          'coby',
          'cody',
          'garrett',
          'panda',
          'chad',
          'tim',
          'derek',
          'hashtag',
          'slippery',
          'stairs',
          'baby',
          'oil',
          'catapult',
          'giant',
          'trebuchet',
          'dunk',
          'longest',
          'furthest',
        ],
        categoryId: '22',
        liveBroadcastContent: 'none',
        localized: {
          title: 'Longest Dunk Wins (Bloopers & Behind The Scenes)',
          description:
            'Everything you love about Dude Perfect.. plus even more!  Be sure to SUBSCRIBE for more behind the scenes, bloopers, and bonus content! ► CLICK HERE: http://bit.ly/DPplusSubscribe\n\n► Click HERE to watch the main video: https://youtu.be/qUUloBe5vEo\n\n► Click HERE to watch more Behind the Scenes on Dude Perfect Plus: https://www.youtube.com/watch?v=XBh4bnd51c4&list=PLC_fTveW0jTZ-jc2LqY4dvhpyYSuPgNB7&ab_channel=DudePerfectPlus\n\nNEXT LEVEL STUFF \n-------------------------------------------\n🎒 NEW Merch - bit.ly/DPStore\n🎮 Play our FREE iPhone game! - http://smarturl.it/DudePerfect2\n📱 Text us - (469) 205-7005\n🔔 Hit the bell next to Subscribe so you don\'t miss a video!\n👨🏻\u200d💻 Watch our newest vids! - http://bit.ly/NewDPVids\n📕 Read our Book - "Go Big" - http://amzn.to/OYdZ2s\n\nFollow our Instagrams so we can be best friends \n-------------------------------------------\n🏆 http://Instagram.com/DudePerfect\n🧔🏻 http://Instagram.com/TylerNToney\n👱🏻\u200d♂️ http://Instagram.com/Cody_Jones_\n🙋🏻\u200d♂️ http://Instagram.com/CobyCotton\n👨\u200d🦰 http://Instagram.com/GarrettHilbert\n⛹🏻\u200d♂️ http://Instagram.com/CoryCotton\n-------------------------------------------\nBonus points if you\'re still reading this! \nComment: Ryan is a DP prop wizard!\n\nClick here to learn more about Dude Perfect:\nhttp://bit.ly/AboutDudePerfect\n\nAs always...Go Big and God Bless!\n- Your friends at Dude Perfect\n\nBusiness or Media, please contact us at: \nDude@DudePerfect.com\n------------\n\n5 Best Friends and a Panda.\nIf you like Sports + Comedy, come join the Dude Perfect team!\n\nBest known for trick shots, stereotypes, battles, bottle flips, ping pong shots and all-around competitive fun, Dude Perfect prides ourselves in making the absolute best family-friendly entertainment possible! Welcome to the crew! \n\nPound it 👊🏻 Noggin 🙇🏻\u200d♂️ \n- Dude Perfect',
        },
      },
      statistics: {
        viewCount: '1262669',
        likeCount: '45898',
        dislikeCount: '405',
        favoriteCount: '0',
        commentCount: '1110',
      },
    },
    {
      kind: 'youtube#video',
      etag: 'CQFoOthh_8sSV6sbXXPxPLVdVYI',
      id: 'HgYVuXaihNs',
      snippet: {
        publishedAt: '2021-03-09T22:30:43Z',
        channelId: 'UCtinbF-Q-fVthA0qrFQTgXQ',
        title: 'my brother Van',
        description:
          'DO IT!!!!  --  https://www.youtube.com/user/VanNeistat\n\nmusic by; So Wylie\nhttps://instagram.com/so.wylie/\nhttps://twitter.com/sowylie\nhttps://spoti.fi/32Hb2lz',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/HgYVuXaihNs/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/HgYVuXaihNs/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/HgYVuXaihNs/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/HgYVuXaihNs/sddefault.jpg',
            width: 640,
            height: 480,
          },
        },
        channelTitle: 'CaseyNeistat',
        tags: [
          'van neistat',
          'neistat brothers',
          'new york city',
          'los angeles',
          'filmmaking',
          'casey van',
          'casey brother',
          'subscribe to van',
        ],
        categoryId: '22',
        liveBroadcastContent: 'none',
        localized: {
          title: 'my brother Van',
          description:
            'DO IT!!!!  --  https://www.youtube.com/user/VanNeistat\n\nmusic by; So Wylie\nhttps://instagram.com/so.wylie/\nhttps://twitter.com/sowylie\nhttps://spoti.fi/32Hb2lz',
        },
        defaultAudioLanguage: 'en',
      },
      statistics: {
        viewCount: '526647',
        likeCount: '41506',
        dislikeCount: '467',
        favoriteCount: '0',
        commentCount: '3794',
      },
    },
    {
      kind: 'youtube#video',
      etag: 'gdpCgKAnZ5uZGSY2UW6opBGqRDI',
      id: 'UCjkpQNtEJc',
      snippet: {
        publishedAt: '2021-03-09T21:22:48Z',
        channelId: 'UCgjtvMmHXbutALaw9XzRkAg',
        title:
          "White House: Stimulus checks to come this month, but without Biden's signature",
        description:
          'Subscribe to our channel! https://www.youtube.com/channel/UCgjtvMmHXbutALaw9XzRkAg?view_as=subscriber\n\nCheck out our video catalog: https://www.politico.com/video      \n\nFollow POLITICO here:   \n➤ Twitter: https://twitter.com/politico/ \n➤ Instagram: https://www.instagram.com/politico/   \n➤ Facebook: https://www.facebook.com/politico/',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/UCjkpQNtEJc/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/UCjkpQNtEJc/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/UCjkpQNtEJc/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/UCjkpQNtEJc/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/UCjkpQNtEJc/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'POLITICO',
        tags: [
          'politics',
          'politico',
          'news',
          'capitol hill',
          'congress',
          'stimulus check',
          'coronavirus',
          'joe biden',
          'covid relief',
        ],
        categoryId: '25',
        liveBroadcastContent: 'none',
        defaultLanguage: 'en',
        localized: {
          title:
            "White House: Stimulus checks to come this month, but without Biden's signature",
          description:
            'Subscribe to our channel! https://www.youtube.com/channel/UCgjtvMmHXbutALaw9XzRkAg?view_as=subscriber\n\nCheck out our video catalog: https://www.politico.com/video      \n\nFollow POLITICO here:   \n➤ Twitter: https://twitter.com/politico/ \n➤ Instagram: https://www.instagram.com/politico/   \n➤ Facebook: https://www.facebook.com/politico/',
        },
        defaultAudioLanguage: 'en',
      },
      statistics: {
        viewCount: '746192',
        likeCount: '6180',
        dislikeCount: '6737',
        favoriteCount: '0',
        commentCount: '7900',
      },
    },
    {
      kind: 'youtube#video',
      etag: '2N0OydYl-0bp8rl3UVySjqw_pEA',
      id: '7dmB1_g1GN0',
      snippet: {
        publishedAt: '2021-03-09T23:30:14Z',
        channelId: 'UCi3RHb1iJWQB4qOuWPVAQ_w',
        title:
          'BTS shares how they feel as first time Grammy nominees and performers (FULL) | Entertain This',
        description:
          'Ahead of the 2021 Grammy\'s, BTS sits down with USA TODAY\'s Fatima Farha to reveal how they are feeling as first time nominees and performers, what BTS Army can look forward to during their performance, and what "Dynamite" means to them now. Watch the full interview here.\n\n» Subscribe to USA TODAY Entertainment: https://bit.ly/2STkDAa',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/7dmB1_g1GN0/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/7dmB1_g1GN0/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/7dmB1_g1GN0/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/7dmB1_g1GN0/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/7dmB1_g1GN0/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'USA TODAY Entertainment',
        tags: [
          'usa today',
          'usa today entertainment',
          'bts interview 2021',
          'bts grammy interview',
          'bts previews grammy performance',
          'is bts releasing new music',
          'what is bts working on',
          'bts fatima farha',
          'jin v jungkook joking',
          'bts talks about the success of dynamite',
        ],
        categoryId: '22',
        liveBroadcastContent: 'none',
        localized: {
          title:
            'BTS shares how they feel as first time Grammy nominees and performers (FULL) | Entertain This',
          description:
            'Ahead of the 2021 Grammy\'s, BTS sits down with USA TODAY\'s Fatima Farha to reveal how they are feeling as first time nominees and performers, what BTS Army can look forward to during their performance, and what "Dynamite" means to them now. Watch the full interview here.\n\n» Subscribe to USA TODAY Entertainment: https://bit.ly/2STkDAa',
        },
      },
      statistics: {
        viewCount: '898845',
        likeCount: '150389',
        dislikeCount: '310',
        favoriteCount: '0',
        commentCount: '6990',
      },
    },
  ];

  return {
    payload: { videos },
    type: types.YOUTUBE_GET_VIDEOS,
  };
};

export const youtubeSearchVideos = async (search) => {
  // const response = await YoutubeService.searchVideos(search);
  // const videos = response.result.items;

  const videos = [];

  return {
    payload: { videos },
    type: types.YOUTUBE_SEARCH_VIDEOS,
  };
};

export const youtubeRelatedVideos = async (relatedToVideoId) => {
  // const response = await YoutubeService.getRelatedVideos(relatedToVideoId);
  // const relatedVideos = response.result.items;

  const relatedVideos = [
    {
      kind: 'youtube#searchResult',
      etag: 'QQWKtsPM72xAPxJmnKUvNkC71x4',
      id: {
        kind: 'youtube#video',
        videoId: 'tm11yTAXjT4',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'TyjUWzs94brPKtt9np4rC4W_k1I',
      id: {
        kind: 'youtube#video',
        videoId: 'KenzFW6SsFo',
      },
      snippet: {
        publishedAt: '2021-03-11T18:37:52Z',
        channelId: 'UCxikaEkkXH23Y3smqPBpNJQ',
        title: 'DOES IT LIVE UP TO THE HYPE??? | NF X HOPSIN "LOST" FIRST REACTION!!',
        description:
          'Become a Patreon for exclusive perks and be a direct help to the channel!! https://www.patreon.com/thethirdernest\n\nFOLLOW THE STREAM FAM!! https://www.twitch.tv/thethirdernest\n\nSEE THE GEAR I USE FOR VIDEOS HERE: https://kit.co/thethirdernest\n-----------------------------------------------------------------------------------------------\nDISCORD FOR THE COOL KIDS: https://discord.gg/ycGkz26\n-----------------------------------------------------------------------------------------------\nFOLLOW ME ON SOCIALS!! \nINSTAGRAM: https://www.instagram.com/thethirdernest/\nTWITTER: https://twitter.com/THETHIRDERNEST\n\n#thethirdernest #thethirdfamily #LOST',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/KenzFW6SsFo/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/KenzFW6SsFo/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/KenzFW6SsFo/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/KenzFW6SsFo/sddefault.jpg',
            width: 640,
            height: 480,
          },
        },
        channelTitle: 'TheThirdErnest',
        liveBroadcastContent: 'none',
        publishTime: '2021-03-11T18:37:52Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: '9W3RFNbUnni948MgZEH6ZfTtiEk',
      id: {
        kind: 'youtube#video',
        videoId: 'wohkCHvsIVc',
      },
      snippet: {
        publishedAt: '2020-04-24T15:08:57Z',
        channelId: 'UCE1iUpGXs2ejarZLVjMBveg',
        title: 'Eminem feat. NF - Only',
        description:
          'NF & Eminem - Only | 2020 Music Video | New Sad Emotional Song of NF and Eminem | Inspired by Godzilla and Darkness\n\nMusic Video by Swirve\nhttps://www.youtube.com/swirvemixes\n\nInspired by\nEminem: Godzilla ft. Juice World, Darkness (Official Videos)\nNF: Paid My Dues, When I Grow Up, The Search, Time, Leave Me Alone (Official Videos)\n\nSupport Eminem\nFacebook: https://www.facebook.com/eminem/\nInstagram: https://www.instagram.com/eminem/\n\nSupport NF\nFacebook: https://www.facebook.com/nfrealmusic/\nInstagram: https://www.instagram.com/nfrealmusic/\n\nThis is a Sad Song by Eminem and NF.',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/wohkCHvsIVc/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/wohkCHvsIVc/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/wohkCHvsIVc/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/wohkCHvsIVc/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/wohkCHvsIVc/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'Thug Life Music',
        liveBroadcastContent: 'none',
        publishTime: '2020-04-24T15:08:57Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'gyXYN1Kq4qLI3-ebe98uFg3MYMs',
      id: {
        kind: 'youtube#video',
        videoId: 'Hzib-n4hi5o',
      },
      snippet: {
        publishedAt: '2021-03-11T20:42:05Z',
        channelId: 'UCCpbrIr6hlIPd2EOTZxVBJw',
        title: 'RAPPER REACTS to NF - LOST ft. Hopsin',
        description:
          "Install Raid for Free ✅ IOS: https://clcr.me/kSJ9OI  ✅ ANDROID: https://clcr.me/b9VAq1   \n✅ PC: https://clcr.me/D3pgTh  and get a special starter pack 💥Available only for the next 30 days!\n\nI did my best to record with a setup that I'm not use to! Hope you guys enjoyed the reaction. I'm just unbelievably happy that NF and Hopsin have finally made a song together.\n\n►Features: https://www.indieamplify.com/product/feature-crypt/\n\n►Business Inquiries: cryptbusinessllc@gmail.com\n\n►Sports Channel: https://www.youtube.com/channel/UCwX3_mpYFKOJREdnOHD16LQ\n\n►Podcast Channel: https://www.youtube.com/channel/UC7sFMMoM89vgcgDOUG9XMxQ\n\n► Merch: https://www.crypttherapper.com/shop\n\n► Instagram: https://instagram.com/CryptTheRapper\n\n► Twitter: https://twitter.com/CryptTheRapper\n\n► Spotify: https://open.spotify.com/artist/1WIHbvNZTybCVHFMbzuGJo\n\n► Facebook: https://www.facebook.com/crypttherapperOG/\n\n► Soundcloud: https://soundcloud.com/crypt-226456644\n\nI'm a fat, white YouTube rapper and damn proud of it. Welcome to the Crypt show.\n\nRAPPER REACTS to NF - LOST ft. Hopsin\n\n#NF #Hopsin #Lost",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/Hzib-n4hi5o/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/Hzib-n4hi5o/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/Hzib-n4hi5o/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/Hzib-n4hi5o/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/Hzib-n4hi5o/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'Crypt',
        liveBroadcastContent: 'none',
        publishTime: '2021-03-11T20:42:05Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'J5kA_Q4QwAvt2G00OSXg7wfXYOo',
      id: {
        kind: 'youtube#video',
        videoId: 'Ykg0fzAC2S4',
      },
      snippet: {
        publishedAt: '2021-03-11T18:53:49Z',
        channelId: 'UC_62jYuKq0O-K66pjrK5jhQ',
        title:
          'Rapper Reacts to NF LOST ft. Hopsin!! | THE BARS IN THIS! (First Ever Reaction)',
        description:
          "There are levels to this! Rapper reacts to NF and surprise new song 'Lost' ft. Hopsin. Comment below more reactions you want to see!\n\nOrder my BRAND NEW ALBUM NOW!! (all proceeds directly support the channel)\nhttp://www.knoxhillmusic.com\n\nStream it on all platforms: https://distrokid.com/hyperfollow/knoxhill/chaos-theory-2\n\nThe music video 'U Mad Yet' in the intro: https://youtu.be/h9g-G_57EbY\n\nFollow me on Instagram: http://www.instagram.com/knoxhilldmv\nNew songs on my Twitter: http://www.twitter.com/theknoxhill\nFacebook: http://www.facebook.com/knoxhill\nTik Tok: @knoxhilldmv\n\nSupport the Patreon for exclusive content! http://www.patreon.com/knoxhill\nCome join the Discord and say hello: https://discord.gg/wf8FX6X\n\nFollow my Spotify: http://bit.ly/KnoxHillSpotify\nFollow my Apple Music: http://bit.ly/KnoxHillAppleMusic\n\nSupport independent music: http://bit.ly/SubscribeKnoxHill\n\nLyrics.\n\nLike this vid? Here's more like it:\nMy Song 'Lean On': https://youtu.be/Cf4MTKKIUrE\nEminem Gnat Music Video Reaction:\nhttps://youtu.be/cDsrQ1Swz4I \nBlackpink Lovesick Girls First Ever Reaction: https://youtu.be/HS-U7rngXkI\n\nBTS Official  Mic Drop First Ever Reaction: https://youtu.be/zTsmop6LlZI\nEminem Zeus Reaction: https://youtu.be/j5bR7iD5koM\nEZ Mil Panalo live on the USA Wish Bus: https://youtu.be/XjZDGmsnP8Q\n NF Real Music Intro III Reaction: https://youtu.be/VDK0KrLxS6I\nNF Intro II: https://youtu.be/PQp89meF5BI\nEverything Great About Paid My Dues: https://youtu.be/Of8s9_vcBTI\nRapper Reacts to Mansion: \nhttps://youtu.be/3NrD1aTGgWk\nNF Oh Lord: https://youtu.be/a8opoXN35s8\n\nNF Reaction. NF Lost ft. Hopsin\n @NFVEVO @NFrealmusic  @Hopsintv \n\nDo what you love, or don't do it at all. \n\nBusiness:\nknoxhilldmv@gmail.com\n\nKnox Hill\n\n*Please note that subscriber giveaways are not real and meant for humor and entertainment purposes only. None of the products that are mentioned are physically given away.*\n\n*Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for \"fair use\" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use. No copyright infringement intended. ALL RIGHTS BELONG TO THEIR RESPECTIVE OWNERS*\n\n#NF #Lost #Reaction",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/Ykg0fzAC2S4/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/Ykg0fzAC2S4/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/Ykg0fzAC2S4/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/Ykg0fzAC2S4/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/Ykg0fzAC2S4/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'Knox Hill',
        liveBroadcastContent: 'none',
        publishTime: '2021-03-11T18:53:49Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: '7YAwAwczNm-qI6sxwygu1m3rmo4',
      id: {
        kind: 'youtube#video',
        videoId: 'adLGHcj_fmA',
      },
      snippet: {
        publishedAt: '2021-03-03T22:52:06Z',
        channelId: 'UCoUM-UJ7rirJYP8CQ0EIaHA',
        title:
          'Bruno Mars, Anderson .Paak, Silk Sonic - Leave the Door Open [Official Video]',
        description:
          'The official music video for Bruno Mars, Anderson .Paak, Silk Sonic\'s new single "Leave the Door Open"\nDownload/Stream: https://apple.co/38tHKJs\n\nDirected by Bruno Mars and Florent Dechard \nPhil Tayag - creative consultant\n\nLimited Edition Collectible CD Single Available Here: https://smarturl.it/LTDO_CDSINGLE\n\n🔔 Subscribe for the latest official music videos, live performances, lyric videos, official audio, and more: https://Atlantic.lnk.to/BMsubscribe\n \n🎵 Listen to the Best of Bruno Mars playlist ➤ https://bit.ly/3bbslw8\u200b \n🎵 Watch Bruno Mars’ Official Music Videos ➤ https://bit.ly/2U7I3mi\u200b \n\nGet Bruno Mars merchandise! https://brunom.rs/brunomarsstore \n\nConnect with Bruno: \nhttp://www.brunomars.com\u200b \nhttp://www.instagram.com/brunomars\u200b \nhttp://www.twitter.com/brunomars\u200b \nhttp://www.facebook.com/brunomars \n\nConnect with Anderson .Paak.: \nhttps://www.facebook.com/AndersonPaak \nhttps://www.instagram.com/anderson._paak/ \nhttps://twitter.com/AndersonPaak \n\nConnect with Silk Sonic: \nhttps://SilkSonic.lnk.to/Instagram \nhttps://SilkSonic.lnk.to/Twitter \nhttps://SilkSonic.lnk.to/Facebook \nhttps://SilkSonic.lnk.to/Spotify \nhttps://SilkSonic.lnk.to/AppleMusic \nhttps://SilkSonic.lnk.to/TikTok \n\nLyrics: \nWhat you doin\n(what you doin)\n\nWhere you at\n(where you at)\n\nOh you got plans  \n(you got plans)\n\nDon’t say that       \n(shut yo trap)\n\nI’m sippin wine     \n(sip sip)\n\nIn a robe               \n(drip rip)\n\nI look too good    \n(look too good)\n\nTo be alone         \n(wooohooo)\n\nMy house clean  \n(house clean)\n\nMy pool warm   \n(pool warm)\n\nJust shaved        \n(smooth like a new born)\n\nWe should be dancing, romancing\nIn the east wing and the west wing\nOf this mansion, wus happenin\n\nI aint playin no games\nEvery word that I say \nIs coming straight from the heart\n(so if you tryna lay in these arms)\n\nImma leave the door open\n(imma leave the door open)\nImma leave the open girl\n(Imma leave the door open, hopin)\n\nThat you feel the way I feel\nAnd you want me like I want you tonight baby\n(tell me that you’re coming through)\n\nYou’re so sweet \n(so sweet)\n\nSo tight\n(so tight)\n\nI won’t bite\n(ahh ahh)\n\nUnless you like\n(unless you like)\n\nIf you smoke\n(what you smoke)\n\nI got that haze\n(purple haze)\n\nAnd if you’re hungry girl I got filets\n(woohooo)\n\nOoh baby don’t keep me waiting\nThere’s so much love we could be making\nI’m talking kissing, Cuddling\nRose petals in the bathtub\nLets jump in, Its bubblin\n\nI aint playin no games\nEvery word that I say \nIs coming straight from the heart\n(so if you tryna lay in these arms)\n\nImma leave the door open\n(imma leave the door open)\nImma leave the open girl\n(Imma leave the door open, hopin)\n\nThat you feel the way I feel\nAnd you want me like I want you tonight baby\n(tell me that you’re coming through)\n\nLa la laaa la la la la la \n(I need you baby)\n\nLa la laaa la la la la\n(I gotta see you baby)\n\nLa la laaa la la la la \n(Girl I’m tryna give you this)\n(aaaaahhhhhhhhhh)\n\nImma leave the door open\n(imma leave the door open)\nImma leave the open girl\n(Imma leave the door open, hopin)\n\nThat you feel the way I feel\nAnd you want me like I want you tonight baby\n(tell me that you’re coming through)\n\n\nThe official YouTube channel of Atlantic Records artist Bruno Mars. 11x GRAMMY Award winner and 27x GRAMMY Award nominee Bruno Mars is a celebrated singer, songwriter, producer, and musician with iconic hits like "The Lazy Song", "That\'s What I Like", "Just The Way You Are", "24K Magic", "Locked Out Of Heaven", and "When I Was Your Man". His legendary body of work also includes blockbuster albums such as Doo-Wops & Hooligans, Unorthodox Jukebox, and 24K Magic, as well as era-defining collaborations like "Uptown Funk" with Mark Ronson, "Finesse" with Cardi B, and "Nothin\' On You" with B.o.B. Forever classic, yet supremely innovative, Bruno continues to redefine music, style, and popular culture, pushing the boundaries of pop, R&B, funk, soul, hip-hop, and dance, and remains as influential as ever.\n\n#BrunoMars #AndersonPaak #SilkSonic #LeaveTheDoorOpen',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/adLGHcj_fmA/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/adLGHcj_fmA/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/adLGHcj_fmA/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/adLGHcj_fmA/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/adLGHcj_fmA/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'Bruno Mars',
        liveBroadcastContent: 'none',
        publishTime: '2021-03-03T22:52:06Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'L_rukYCgYzetotFbs_dP_LniihU',
      id: {
        kind: 'youtube#video',
        videoId: 'QBsA2ETp7JA',
      },
      snippet: {
        publishedAt: '2014-07-18T06:24:56Z',
        channelId: 'UCvlJkDfgfG3J38pup6lvrPg',
        title: 'Hopsin - ILL MIND OF HOPSIN 7',
        description:
          'Download now on iTunes: http://flyt.it/poundsyndrome\n\nHopsin\nhttps://www.facebook.com/hellohopsin\nhttp://www.twitter.com/hopsin\nhttp://www.instagram.com/hopsinson\n\nProduced by Hopsin\n\nDirected by Hopsin\n\nFunk Volume\nhttp://www.myfunkvolume.com',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/QBsA2ETp7JA/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/QBsA2ETp7JA/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/QBsA2ETp7JA/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/QBsA2ETp7JA/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/QBsA2ETp7JA/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'Hopsintv',
        liveBroadcastContent: 'none',
        publishTime: '2014-07-18T06:24:56Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'N_kXIt1Q6OSSCqRlIhiTIUpQZHc',
      id: {
        kind: 'youtube#video',
        videoId: 'ktEoXtQEtqA',
      },
      snippet: {
        publishedAt: '2021-03-11T20:47:58Z',
        channelId: 'UCBj7lf9bAmctuhsnZ3oxqsg',
        title: 'TRASH or PASS! NF ft Hopsin ( Lost ) [REACTION!!!]',
        description:
          '#FireSquad Was that a Trash or Pass?\n\nSong - NF ft Hopsin ( Lost )\n\nFollow me on social media!\n● https://patreon.com/Layedbakdfr\n● https://www.instagram.com/LayedBakDFR/\n● https://twitter.com/LayedBakDFR\n● https://soundcloud.com/LayedBakDFR\n● Snapchat: LayedBakDFR\n● Twitch: https://twitch.tv/layedbakdfr\n______________________________________________________________________________\n\nWhat reaction do you want to see next? Comment down below!',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/ktEoXtQEtqA/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/ktEoXtQEtqA/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/ktEoXtQEtqA/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/ktEoXtQEtqA/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/ktEoXtQEtqA/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'LayedBakDFR',
        liveBroadcastContent: 'none',
        publishTime: '2021-03-11T20:47:58Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: '3YkAFnIyXXgCktoyD7i6LeaTaWY',
      id: {
        kind: 'youtube#video',
        videoId: '33TEU3kQBOo',
      },
      snippet: {
        publishedAt: '2021-02-27T00:40:35Z',
        channelId: 'UCiIETTq2It3OzW8_WYRPTyQ',
        title: 'Russ - MISUNDERSTOOD (Official Video)',
        description:
          'Official video for "MISUNDERSTOOD" \nhttps://russ.is\u200b\n\nTwitter: https://www.twitter.com/russdiemon\u200b\nInstagram: https://www.instagram.com/russ\u200b\nFacebook: https://www.facebook.com/russtheone\u200b\nTikTok: https://tiktok.com/@russ\u200b\n\n\nSHOP: https://shop.russ.is/\u200b\n\n\nProduced by Russ\n\n\nDirected by Edgar Esteves \n\n\n\n\n\n℗ 2021 Russ My Way Inc.\n\n\n#MISUNDERSTOOD #RUSS',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/33TEU3kQBOo/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/33TEU3kQBOo/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/33TEU3kQBOo/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/33TEU3kQBOo/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/33TEU3kQBOo/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'Russ',
        liveBroadcastContent: 'none',
        publishTime: '2021-02-27T00:40:35Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'pfP8DzGfZ4IPI8hVqIetZgqQrpo',
      id: {
        kind: 'youtube#video',
        videoId: 'pg17kp1s83U',
      },
      snippet: {
        publishedAt: '2019-08-30T18:42:46Z',
        channelId: 'UCWBlX81voC_zMGsQvfiaZoQ',
        title: 'NF - When I Grow Up Ft. Logic, Joyner Lucas & Eminem (Remix)',
        description:
          '"When I Grow Up" from the album : (The Search) by NF feat. Eminem, Joyner Lucas & Logic (Remix By Belal).\nFollow me on IG:\nhttps://www.instagram.com/b.e.l.a.l_279/\nAdd me on Facebook:\nhttps://www.facebook.com/blal.ashraf.33',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/pg17kp1s83U/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/pg17kp1s83U/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/pg17kp1s83U/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/pg17kp1s83U/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/pg17kp1s83U/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'Bulky B.',
        liveBroadcastContent: 'none',
        publishTime: '2019-08-30T18:42:46Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'bs5FhryCqP5mCM98uB0War8_BKE',
      id: {
        kind: 'youtube#video',
        videoId: 'S-yT5-C-jDA',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'FdxaRFsaTRm4j2nSO_W2llRIeGM',
      id: {
        kind: 'youtube#video',
        videoId: 'qOT60LuYHmA',
      },
      snippet: {
        publishedAt: '2021-01-22T14:16:34Z',
        channelId: 'UCvlJkDfgfG3J38pup6lvrPg',
        title: 'Hopsin - Your House',
        description:
          "Hopsin's new single YOUR HOUSE available everywhere:\nhttps://ffm.to/your_house\n\nFollow Hopsin:\nFacebook: http://www.facebook.com/hellohopsin\nInstagram: @hopsin\nTwitter: @hopsin\nWebsite: http://www.undercoverprodigy.com",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/qOT60LuYHmA/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/qOT60LuYHmA/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/qOT60LuYHmA/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/qOT60LuYHmA/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/qOT60LuYHmA/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'Hopsintv',
        liveBroadcastContent: 'none',
        publishTime: '2021-01-22T14:16:34Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'G2OCeavhSIAAAm5tcIGhTFqgvZs',
      id: {
        kind: 'youtube#video',
        videoId: '2pJZ3bFbaCQ',
      },
      snippet: {
        publishedAt: '2020-05-10T11:06:03Z',
        channelId: 'UCKZwhYmQYXKrminnS7sLbbg',
        title:
          '♕ Best NF ft. Eminem Music Playlist | Motivational Music Mix 2020 | Best of NF Remixes ♕',
        description:
          '🍹 Best of NF ft. Eminem Remixes! | Big Playlist | Sad Music Mix 2020\n🍸 Subscribe for more videos! ;)\n🥂 Like & Share! :)\n\n♫ \u00ad\u00adSupport NF ♫\n♦ https://instagram.com/nfrealmusic\n♦ http://www.facebook.com/nfrealmusic\n♦ http://www.twitter.com/nfrealmusic\n♦ http://smarturl.it/NFSpotify\n\n♫ \u00ad\u00adSupport Eminem ♫\n♦ http://eminem.com\n♦ https://facebook.com/eminem\n♦ https://twitter.com/eminem\n♦ https://youtube.com/EminemMusic\n♦ https://instagram.com/eminem\n♦ http://eminem.tumblr.com\n\n\n#NF #Eminem #Mix #Playlist #Music',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/2pJZ3bFbaCQ/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/2pJZ3bFbaCQ/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/2pJZ3bFbaCQ/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/2pJZ3bFbaCQ/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/2pJZ3bFbaCQ/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'iHateMyLyfe',
        liveBroadcastContent: 'none',
        publishTime: '2020-05-10T11:06:03Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'nEhhJpKqitLqSD9eAn9M__t2bFk',
      id: {
        kind: 'youtube#video',
        videoId: '1AeQjMZiYoE',
      },
      snippet: {
        publishedAt: '2016-07-10T19:46:29Z',
        channelId: 'UCvlJkDfgfG3J38pup6lvrPg',
        title: 'Hopsin - Die This Way',
        description:
          'Get song on iTunes\nhttp://apple.co/2e4J4aV\n\nHopsin in "Die This Way\' (short film)\nDirected by George Orozco\n\nCatch Hopsin in your city for the NO SHAME tour:  www.undercoverprodigy.com/tour\n\nFollow Hopsin:\nFacebook: http://www.facebook.com/hellohopsin\nInstagram: @hopsinson\nTwitter: @hopsin\nWebsite: http://www.undercoverprodigy.com',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/1AeQjMZiYoE/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/1AeQjMZiYoE/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/1AeQjMZiYoE/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/1AeQjMZiYoE/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/1AeQjMZiYoE/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'Hopsintv',
        liveBroadcastContent: 'none',
        publishTime: '2016-07-10T19:46:29Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'nzn3_Wo6kdyLOeyojtm6n5wZnJQ',
      id: {
        kind: 'youtube#video',
        videoId: 'zYE17Wlep80',
      },
      snippet: {
        publishedAt: '2018-02-15T20:36:31Z',
        channelId: 'UC0v-tlzsn0QZwJnkiaUSJVQ',
        title: 'COLLEGE KIDS REACT TO NF',
        description:
          'NF reacted to by College Kids! Video links below!\nSubscribe to NF https://www.youtube.com/user/NFVEVO\nWatch all main React episodes (Kids/Teens/Elders/Adults/YouTubers): http://goo.gl/4iDVa\nJoin the SuperFam and support FBE: https://www.youtube.com/user/React/join\nSUBSCRIBE & HIT THE 🔔! New Videos 2pm PST on FBE! http://goo.gl/aFu8C\nWatch latest videos from FBE: https://goo.gl/aU5PSm\n\nContent Featured: \nNF - NO NAME\nhttps://goo.gl/N5iNZo\n\nNF - Let You Down\nhttps://goo.gl/gVpZEM\n\nNF - Real\nhttps://goo.gl/ehj6ru\n\nNF - All I Have\nhttps://goo.gl/hNZnqf\n\nNF - How Could You Leave Us\nhttps://goo.gl/4ju4Cs\n\nFBE’s goal is to credit the original links to the content featured in its shows. If you see incorrect or missing attribution please reach out to credits@fbeteam.com \n\nFeatured College Kids: \nBrandon\nhttps://www.youtube.com/c/brandocommandoyaboi\nBrittany\nhttps://www.instagram.com/brittcuadra/\nDionte\nhttps://www.snapchat.com/add/cover_tastic\nEric\nhttps://www.youtube.com/4N1\nEthan James\nhttps://www.youtube.com/channel/UCqSX49pYAIKd8YslPguEG2g\nLabib\nhttps://www.youtube.com/user/Labib96\nMadison\nhttps://www.instagram.com/MaddiePerry123/\nMichelle\nhttps://www.instagram.com/thewickedlady/\nSheila\nhttps://www.youtube.com/channel/UCtOHkTxCwPWkdkTckp1-jlw\n\nMERCH 👕 https://www.shopfbe.com\n\nFollow FBE:\nFBE WEBSITE: https://fbeteam.com/\nFBE CHANNEL: http://www.youtube.com/FBE\nREACT CHANNEL: http://www.youtube.com/REACT\nBONUS CHANNEL: https://www.youtube.com/FBE2\nFACEBOOK: http://www.facebook.com/FBE\nFACEBOOK: http://www.facebook.com/FBEShows\nTWITTER: http://www.twitter.com/fbe\nINSTAGRAM: http://www.instagram.com/f/fbe\nSNAPCHAT: https://www.snapchat.com/add/finebros\n\nTWITCH: https://www.twitch.tv/fbelive\n\nSEND US STUFF:\nFBE\nP.O. BOX 4324\nValley Village, CA 91617-4324\n\nCreators & \nHead of Post Production - Nick Bergthold\nSr. Associate Producer - Kyle Segal\nAssociate Producer - Ethan Weiser, Vartuhi Oganesyan\nJr. Associate Producer - JC Chavez\nProduction Coordinator - Cynthia Garcia\nStudio Technician - Josh Hilton\nProduction Assistant - Stephen Miller, Jayden Romero\nEditor - Zach Butler\nAssistant Editor -  Austin Miller, Lizzy Siskind\nDirector of Production - Drew Roder\nAssistant Production Coordinator - Kristy Kiefer\nPost Supervisor - Adam Speas, David Valbuena\nSet design - Melissa Judson\nMusic - Cyrus Ghahremani\n\n© FBE, Inc\n\nCollege Kids React #53 - COLLEGE KIDS REACT TO NF',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/zYE17Wlep80/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/zYE17Wlep80/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/zYE17Wlep80/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/zYE17Wlep80/sddefault.jpg',
            width: 640,
            height: 480,
          },
        },
        channelTitle: 'REACT',
        liveBroadcastContent: 'none',
        publishTime: '2018-02-15T20:36:31Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'Y8s8bCjgSqbWV-nZG5F9Y8dCbwU',
      id: {
        kind: 'youtube#video',
        videoId: 'ztIyOjUPAzA',
      },
      snippet: {
        publishedAt: '2020-09-30T08:10:16Z',
        channelId: 'UCRI00CwLZdLRCWg5BdDOsNw',
        title: "I Watched Deadpool 2 in 0.25x Speed and Here's What I Found",
        description:
          "This video is sponsored by SquareSpace. Click this link to build your own professional website today: https://www.squarespace.com/thecanadianlad\n\n\nToday's Edition of I Watched in 0.25x Speed: Deadpool 2 (33 New Details).\nFollow me on Instagram: https://www.instagram.com/thecanadianlad\n\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nPlease do like this video to help me keep growing and subscribe to my channel that helps me in ways I can't even explain. I am really grateful to you guys for supporting my channel.\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\nIf you wanna reach me out for Marvel related theories/ideas: thecanadianbrat@gmail.com\nFor all business related inquiries: thecanadianlad@ellifyagency.com (Business-Only)\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n#Deadpool #XMen #Marvel\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\nMusic: Avengers: Infinity War - It's Time║Free Music // No Copyright Music\nYouTube URL: https://youtu.be/iyXSYr0jsoE\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nI believe all content used falls under the remits of Fair Use, but if any content owners would like to dispute this I will not hesitate to immediately remove said content. It is not my intent to in any way infringe on their content ownership. If you happen to find your art or images in the video please let me know and I will be glad to credit you.",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/ztIyOjUPAzA/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/ztIyOjUPAzA/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/ztIyOjUPAzA/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/ztIyOjUPAzA/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/ztIyOjUPAzA/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'The Canadian Lad',
        liveBroadcastContent: 'none',
        publishTime: '2020-09-30T08:10:16Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'ZE0I9jUwvPrGsOiAAcJEm6bXAyY',
      id: {
        kind: 'youtube#video',
        videoId: '4F1oF7Nr5do',
      },
      snippet: {
        publishedAt: '2021-02-18T19:00:53Z',
        channelId: 'UC_62jYuKq0O-K66pjrK5jhQ',
        title: "Rapper Reacts to NF CLOUDS!! | HE'S FIRING SHOTS?! (First Ever Reaction)",
        description:
          "Nate is back! Rapper reacts to NF and surprise new song 'Clouds'. Comment below more reactions you want to see!\n\nOrder my BRAND NEW ALBUM NOW!! (all proceeds directly support the channel)\nhttp://www.knoxhillmusic.com\n\nStream it on all platforms: https://distrokid.com/hyperfollow/knoxhill/chaos-theory-2\n\nThe music video 'I Worry About Myself' in the intro: https://youtu.be/9gM3nZ8swuc\n\nFollow me on Instagram: http://www.instagram.com/knoxhilldmv\nNew songs on my Twitter: http://www.twitter.com/theknoxhill\nFacebook: http://www.facebook.com/knoxhill\nTik Tok: @knoxhilldmv\n\nSupport the Patreon for exclusive content! http://www.patreon.com/knoxhill\nCome join the Discord and say hello: https://discord.gg/wf8FX6X\n\nFollow my Spotify: http://bit.ly/KnoxHillSpotify\nFollow my Apple Music: http://bit.ly/KnoxHillAppleMusic\n\nSupport independent music: http://bit.ly/SubscribeKnoxHill\n\nLyrics.\n\nLike this vid? Here's more like it:\nMy Song 'Lean On': https://youtu.be/Cf4MTKKIUrE\nEminem Gnat Music Video Reaction:\nhttps://youtu.be/cDsrQ1Swz4I \nBlackpink Lovesick Girls First Ever Reaction: https://youtu.be/HS-U7rngXkI\n\nBTS Official  Mic Drop First Ever Reaction: https://youtu.be/zTsmop6LlZI\nEminem Zeus Reaction: https://youtu.be/j5bR7iD5koM\nEZ Mil Panalo live on the USA Wish Bus: https://youtu.be/XjZDGmsnP8Q\n NF Real Music Intro III Reaction: https://youtu.be/VDK0KrLxS6I\nNF Intro II: https://youtu.be/PQp89meF5BI\nEverything Great About Paid My Dues: https://youtu.be/Of8s9_vcBTI\nRapper Reacts to Mansion: \nhttps://youtu.be/3NrD1aTGgWk\nNF Oh Lord: https://youtu.be/a8opoXN35s8\n\nNF Reaction. NF Clouds. NF Real Music Clouds Music Video. \n@NFVEVO @NFrealmusic \n\nDo what you love, or don't do it at all. \n\nBusiness:\nknoxhilldmv@gmail.com\n\nKnox Hill\n\n*Please note that subscriber giveaways are not real and meant for humor and entertainment purposes only. None of the products that are mentioned are physically given away.*\n\n*Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for \"fair use\" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use. No copyright infringement intended. ALL RIGHTS BELONG TO THEIR RESPECTIVE OWNERS*\n\n#NF #Clouds #Reaction",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/4F1oF7Nr5do/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/4F1oF7Nr5do/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/4F1oF7Nr5do/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/4F1oF7Nr5do/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/4F1oF7Nr5do/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'Knox Hill',
        liveBroadcastContent: 'none',
        publishTime: '2021-02-18T19:00:53Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: '4TDe4Icqt8LzUixszFwOYM2Z_p8',
      id: {
        kind: 'youtube#video',
        videoId: 'ibWdgkv1LSA',
      },
      snippet: {
        publishedAt: '2016-11-08T22:28:14Z',
        channelId: 'UCW1-IILatiSxnede5HicwnA',
        title: 'Mansion - NF (Lyrics)',
        description:
          'Mansion by NF from his album Mansion.\nI CLAIM NO RIGHTS TO THIS SONG.',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/ibWdgkv1LSA/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/ibWdgkv1LSA/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/ibWdgkv1LSA/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/ibWdgkv1LSA/sddefault.jpg',
            width: 640,
            height: 480,
          },
        },
        channelTitle: 'ThatCrazyChick',
        liveBroadcastContent: 'none',
        publishTime: '2016-11-08T22:28:14Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'XzcneI77AG2sFrUEFj6FjqDNvuY',
      id: {
        kind: 'youtube#video',
        videoId: 'Y7pteqWRYu4',
      },
      snippet: {
        publishedAt: '2019-01-28T10:50:21Z',
        channelId: 'UCvlJkDfgfG3J38pup6lvrPg',
        title: "Hopsin - You Should've Known (feat. DAX)",
        description:
          'Listen to the song here:  http://hyperurl.co/vcwhk3\n\nDirector: Hopsin\nProducer: Moses Israel \nProd. Company: Bandwidth Bros. \n1st AD: Roberto Ahumada \n2nd AD: Sergio Ramirez\nDP: Russ Fraser\nSteadicam: Bill Hunt \nArt Director: Day Hernandez \nColor: Ntropic\n\n\n\nFollow Hopsin:\nFacebook: http://www.facebook.com/hellohopsin\nInstagram: @hopsin\nTwitter: @hopsin\nWebsite: http://www.undercoverprodigy.com',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/Y7pteqWRYu4/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/Y7pteqWRYu4/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/Y7pteqWRYu4/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/Y7pteqWRYu4/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/Y7pteqWRYu4/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'Hopsintv',
        liveBroadcastContent: 'none',
        publishTime: '2019-01-28T10:50:21Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'YadiC6sU38WkG8MgpVfD1tVV5mE',
      id: {
        kind: 'youtube#video',
        videoId: 'EIx39N5DVm8',
      },
      snippet: {
        publishedAt: '2021-03-11T17:15:57Z',
        channelId: 'UC2GF1LsqB3BrSoigfmhXVXg',
        title: '[ REACTION ] NF - LOST ft. Hopsin | THEY KILLED THIS!!! 🔥🔥',
        description:
          'Rapper Reacts to NF - LOST ft. Hopsin | THEY KILLED THIS!!! 🔥🔥. JOIN THE KINGDOM TODAY FOR MORE MUSIC REACTION VIDEOS. 👈\n\n🔴 Subscribe For Official Music Video Reactions From All Genres.\n\nADD ON SPOTIFY: https://open.spotify.com/artist/0lEvPwrWS9883d0jQ4SkA7?si=7OywbSsvSRqFt4nT1Ubvdg\n\nINQUIRIES: kingblitzbiz@gmail.com\nINSTAGRAM: http://www.instagram.com/kingblitz\nSOCIAL: http://www.linktr.ee/kingblitz 👈\n\nPaypal: http://www.paypal.me/kingblitz\nCashApp: https://cash.app/$kingblitzcash\n\nFAIR USE:\n*Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. ALL RIGHTS BELONG TO THEIR RESPECTIVE OWNERS*\n\n#nf #reaction #hopsin',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/EIx39N5DVm8/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/EIx39N5DVm8/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/EIx39N5DVm8/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/EIx39N5DVm8/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/EIx39N5DVm8/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'KING BLITZ',
        liveBroadcastContent: 'none',
        publishTime: '2021-03-11T17:15:57Z',
      },
    },
  ];

  return {
    payload: { relatedVideos },
    type: types.YOUTUBE_RELATED_VIDEOS,
  };
};

export const youtubeDetailVideo = async (idVideo) => {
  // const response = await YoutubeService.getStatistics(idVideo);
  // const detailVideo = response.result.items[0];

  const detailVideo = {
    kind: 'youtube#video',
    etag: '7igsy6SuQGnZUdCtd6VfNRyQoZ0',
    id: 'sG9rX6Ifzhw',
    snippet: {
      publishedAt: '2021-03-09T10:58:19Z',
      channelId: 'UCq18eeL7D9Vd8DhjMcLh9QQ',
      title:
        'Piers and Alex Clash Over Prince Harry and Meghan’s Accusations of Racism | Good Morning Britain',
      description:
        'Following the Duke and Duchess of Sussex’s landmark interview with Oprah Winfrey, today’s Good Morning Britain shared the reaction to the revelations, including those about Meghan’s suicidal thoughts and allegations of racism within the Royal family.\n\nSubscribe now for more! http://bit.ly/1NbomQa\n\nBroadcast on 09/03/2021\n\nLike, follow and subscribe to Good Morning Britain!\n\nThe Good Morning Britain YouTube channel delivers you the news that you’re waking up to in the morning. From exclusive interviews with some of the biggest names in politics and showbiz to heartwarming human interest stories and unmissable watch again moments. \n\nJoin Susanna Reid, Piers Morgan, Ben Shephard, Kate Garraway, Charlotte Hawkins and Sean Fletcher every weekday on ITV from 6am until 9 every weekday!\n\nITV Hub: https://bit.ly/37kf3wD\nWebsite: http://bit.ly/1GsZuha\nYouTube: http://bit.ly/1Ecy0g1\nFacebook: http://on.fb.me/1HEDRMb\nTwitter: http://bit.ly/1xdLqU3\n\nhttp://www.itv.com\n\n#GMB #PiersMorgan #SusannaReid',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/sG9rX6Ifzhw/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/sG9rX6Ifzhw/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/sG9rX6Ifzhw/hqdefault.jpg',
          width: 480,
          height: 360,
        },
        standard: {
          url: 'https://i.ytimg.com/vi/sG9rX6Ifzhw/sddefault.jpg',
          width: 640,
          height: 480,
        },
        maxres: {
          url: 'https://i.ytimg.com/vi/sG9rX6Ifzhw/maxresdefault.jpg',
          width: 1280,
          height: 720,
        },
      },
      channelTitle: 'Good Morning Britain',
      tags: [
        'good morning britain',
        'breakfast show',
        'news',
        'morning news',
        'gmb',
        'good morning britain interview',
        'itv',
        'piers morgan',
        'susanna reid',
        'Talk Shows - Topic',
      ],
      categoryId: '24',
      liveBroadcastContent: 'none',
      defaultLanguage: 'en-GB',
      localized: {
        title:
          'Piers and Alex Clash Over Prince Harry and Meghan’s Accusations of Racism | Good Morning Britain',
        description:
          'Following the Duke and Duchess of Sussex’s landmark interview with Oprah Winfrey, today’s Good Morning Britain shared the reaction to the revelations, including those about Meghan’s suicidal thoughts and allegations of racism within the Royal family.\n\nSubscribe now for more! http://bit.ly/1NbomQa\n\nBroadcast on 09/03/2021\n\nLike, follow and subscribe to Good Morning Britain!\n\nThe Good Morning Britain YouTube channel delivers you the news that you’re waking up to in the morning. From exclusive interviews with some of the biggest names in politics and showbiz to heartwarming human interest stories and unmissable watch again moments. \n\nJoin Susanna Reid, Piers Morgan, Ben Shephard, Kate Garraway, Charlotte Hawkins and Sean Fletcher every weekday on ITV from 6am until 9 every weekday!\n\nITV Hub: https://bit.ly/37kf3wD\nWebsite: http://bit.ly/1GsZuha\nYouTube: http://bit.ly/1Ecy0g1\nFacebook: http://on.fb.me/1HEDRMb\nTwitter: http://bit.ly/1xdLqU3\n\nhttp://www.itv.com\n\n#GMB #PiersMorgan #SusannaReid',
      },
    },
    statistics: {
      viewCount: '7559872',
      likeCount: '74422',
      dislikeCount: '13420',
      favoriteCount: '0',
    },
  };

  return {
    payload: { detailVideo },
    type: types.YOUTUBE_STADISTIC_VIDEOS,
  };
};
