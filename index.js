//load the articles

/**
 * TEMPLATES // First part of all code, when you click on an article inside an issue, the article is loaded into the iframe.
 */
const getMetaTemplate = (list = []) => `
<ul class="meta__div_content_ul">
${list.map(opts => getMetaListElementHTML(opts)).join("")}
</ul>
`; //  With the metadata viewer we change different html codes in the existing html. this is the template needed when we render metadata content. Otherwise, this code won’t run. The code is actually the html code, it is made into the template

const getMetaListElementHTML = ({ name, description, link } = {}) => `
<li>
    <a class="meta__content_li_header ${link ? "with_link" : ""}" ${
  link ? `href="${link}" target="_blank"` : ""
}>
        ${name}
    </a>
    <div class="meta__content_li_description">
        ${description}
    </div>
</li>
`; // create a list containing as many people, places, concepts as the elements we have

/**
 * LOGIC
 */
(function() {    //meta type= 3 types, people, places, concepts = these are the keys of this array
  const META_TYPE = {
    PEOPLE: "people",
    PLACES: "places",
    CONCEPTS: "concepts"
  };
  const ISSUE_TYPE = { //variable issue_type = all 3 issues
    PSYCHOLOGY: "psychology",
    CREATION: "creation",
    SOCIETY: "society"
  };
  $(document).ready(function() { //prepare the doc for the function
    let currentStyle = "";
    const styles = [
      { name: "regency", id: "#reg", path: "/regency_css/" }, //styles
      { name: "victorian", id: "#vic", path: "/victorian_css/" },
      { name: "2030", id: "#futr", path: "/futuristic_css/" },
      { name: "1920s", id: "#artnv", path: "/art_nouveau_css/" },
      { name: "grunge", id: "#gr", path: "/grunge_css/" },
      { name: "psych", id: "#psy", path: "/psychedelic_css/" },
      { name: "default", id: "#default", path: "" }
    ];
    const availableRoutes = [ //routes = paths to select the articles
      {
        id: "#load_thehindi", //id onclick  to select that given article
        route: "/articles_giulia/thehindi.html",
        issue: {
          type: ISSUE_TYPE.SOCIETY, //society issues
          index: 1 //no 2 article of society issues
        },
        meta: { //array
          people: [ //key
            {
              name: "Will Wright",
              description:
                "CE0, Game Designer",
              link: "https://en.wikipedia.org/wiki/Will_Wright_(game_designer)"
            }
          ],
          places: [ //key
            {
              name: "Los Angeles",
              description:
                "City",
              link: "https://en.wikipedia.org/wiki/Los_Angeles"
            },
            {
              name: "California",
              description:
                "State",
              link: "https://en.wikipedia.org/wiki/California"
            },
            {
              name: "Botswana",
              description:
                "Country",
              link: "https://en.wikipedia.org/wiki/Botswana"
            },
            {
              name: "London",
              description:
                "City",
              link: "https://en.wikipedia.org/wiki/London"
            }
          ],
          concepts: [ //key
            {
              name: "Electronic Arts",
              description:
                "Company",
              link: "https://en.wikipedia.org/wiki/Electronic_Arts"
            }
          ]
        }
      },
      {
        id: "#load_gamespot",
        route: "/articles_giulia/gamespot.html",
        issue: {
          type: ISSUE_TYPE.SOCIETY,
          index: 2
        },
        meta: {
          people: [
            {

              name: "Will Wright",
              description:
                "CEO, Game Designer",
              link: "https://en.wikipedia.org/wiki/Will_Wright_(game_designer)"

            },
          ],
          places: [

          ],
          concepts: [
            {

                name: "Maxis Studios",
                description:
                  "Company",
                link: "https://en.wikipedia.org/wiki/Maxis"

            },
            {

              name: "id Software",
              description:
                "Company",
              link: "https://en.wikipedia.org/wiki/Id_Software"

          },
          ]
        }
      },
      {
        id: "#load_theguardian",
        route: "/articles_giulia/theguardian.html",
        issue: {
          type: ISSUE_TYPE.SOCIETY,
          index: 0
        },
        meta: {
          people: [

            {
              name: "Cornelia Geppert",
              description:
                "Game Designer, Artist, CEO",
              link: "https://www.ted.com/speakers/cornelia_geppert"
            }
          ],
          places: [
            //{
              //name: "John Doe's Home",
              //description:
                //"John Doe's Home is the example place of our time and well deserves an applouse",
              //link: "https://en.wikipedia.org/wiki/Elon_Musk"
            //}
          ],
          concepts: [
            {
              name: "Electronic Arts",
              description:
                "Company",
              link: "https://en.wikipedia.org/wiki/Electronic_Arts"
            }
          ]
        }
      },
      {
        id: "#load_psychologytoday",
        route: "/articles_szilvi/psychologytoday.html",
        issue: {
          type: ISSUE_TYPE.PSYCHOLOGY,
          index: 0
        },
        meta: {
          people: [
            {
              name: "Will Wright",
              description:
                "CE0, Game Designer",
              link: "https://en.wikipedia.org/wiki/Will_Wright_(game_designer)"
            },
            {
              name: "Edward O. Wilson",
              description:
                "Biologist",
              link: "https://en.wikipedia.org/wiki/E._O._Wilson"
            },
            {
              name: "Henry Jenkins",
              description:
                "Professor",
              link: "https://en.wikipedia.org/wiki/Henry_Jenkins"
            },
            {
              name: "Abraham Maslow",
              description:
                "Psychologist",
              link: "https://en.wikipedia.org/wiki/Abraham_Maslow"
            },
            {
              name: "Christopher Alexander",
              description:
                "Architect",
              link: "https://en.wikipedia.org/wiki/Christopher_Alexander"
            },
            {
              name: "John Suler",
              description:
                "Professor",
              link: "https://en.wikipedia.org/wiki/John_Suler"
            },
          ],
          places: [
            {
              name: "New Jersey",
              description:
                "State",
              link: "https://en.wikipedia.org/wiki/New_Jersey"
            },
            {
              name: "Lawrenceville",
              description:
                "City in New Jersey, USA",
              link: "https://en.wikipedia.org/wiki/Lawrenceville,_New_Jersey"
            },
            {
              name: "Florida",
              description:
                "State",
              link: "https://en.wikipedia.org/wiki/Florida"
            }
          ],
          concepts: [

              {
                name: "Electronic Arts",
                description:
                  "Company",
                link: "https://en.wikipedia.org/wiki/Electronic_Arts"
              },
              {
                name: "Maxis Studios",
                description:
                  "Company",
                link: "https://en.wikipedia.org/wiki/Maxis"
              },
              {
                name: "Massachussets Institute of Technology",
                description:
                  "Unversity, Institute of Technology",
                link: "https://en.wikipedia.org/wiki/Massachusetts_Institute_of_Technology"
              },
              {
                name: "Rider University",
                description:
                  "Unversity",
                link: "https://en.wikipedia.org/wiki/Rider_University"
              }

          ]
        }
      },
      {
        id: "#load_gamestudies",
        route: "/articles_szilvi/gamestudies.html",
        issue: {
          type: ISSUE_TYPE.PSYCHOLOGY,
          index: 1
        },
        meta: {
          people: [
            {
              name: "Will Wright",
              description:
                "CE0, Game Designer",
              link: "https://en.wikipedia.org/wiki/Will_Wright_(game_designer)"
            },
            {
              name: "John Suler",
              description:
                "Professor",
              link: "https://en.wikipedia.org/wiki/John_Suler"
            }

          ],
          places: [
            {
              name: "Romania",
              description:
                "Country",
              link: "https://en.wikipedia.org/wiki/Romania"
            },
            {
              name: "River Forest, Illinois",
              description:
                "Village in Illinois, USA",
              link: "https://en.wikipedia.org/wiki/River_Forest,_Illinois"
            },
          ],
          concepts: [
            {
              name: "Minnesota Multiphasic Personality Inventory-2 (MMPI-2)",
              description:
                "Standardized Psychometric Test",
              link: "https://en.wikipedia.org/wiki/Minnesota_Multiphasic_Personality_Inventory"
            },
            {
              name: "Dominican Univeristy",
              description:
                "Private Catholic University",
              link: "https://en.wikipedia.org/wiki/Dominican_University_(Illinois)"
            },
            {
              name: "Popular Science",
              description:
                "Magazine",
              link: "https://en.wikipedia.org/wiki/Popular_Science"
            },
            {
              name: "NASA",
              description:
                "Company, National Aeronautics and Space Administration (NASA)",
              link: "https://en.wikipedia.org/wiki/NASA"
            }

          ]
        }
      },
      {
        id: "#load_wired",
        route: "/articles_szilvi/wired.html",
        issue: {
          type: ISSUE_TYPE.CREATION,
          index: 0
        },
        meta: {
          people: [

          ],
          places: [
            {
              name: "United States",
              description:
                "Country",
              link: "https://en.wikipedia.org/wiki/United_States"
            },
            {
              name: "Philadelphia",
              description:
                "City",
              link: "https://en.wikipedia.org/wiki/Philadelphia"
            }
          ],
          concepts: [
            {
              name: "Electronic Arts",
              description:
                "Company",
              link: "https://en.wikipedia.org/wiki/Electronic_Arts"
            },
            {
              name: "Verizon Media",
              description:
                "Company, division",
              link: "https://en.wikipedia.org/wiki/Verizon_Media"
            },
            {
              name: "Tumblr",
              description:
                "Social Network",
              link: "https://en.wikipedia.org/wiki/Tumblr"

            },
            {
              name: "Maxis Studios",
              description:
                "Company",
              link: "https://en.wikipedia.org/wiki/Maxis"
            }
          ]
        }
      },
      {
        id: "#load_wired_2",
        route: "/articles_deniz/wired_2.html",
        issue: {
          type: ISSUE_TYPE.PSYCHOLOGY,
          index: 2
        },
        meta: {
          people: [
            {
              name: "Rachel Kowert",
              description:
                "Research Psychologist",
              link: "https://natfluence.com/interview/rachel-kowert/"
            }

          ],
          places: [

            {
              name: "Washington, DC",
              description:
                "City, Capital of USA",
              link: "https://en.wikipedia.org/wiki/Washington,_D.C."
            },
            {
              name: "Seattle",
              description:
                "City",
              link: "https://en.wikipedia.org/wiki/Seattle"
            }
          ],
          concepts: [
            {
              name: "Airbnb",
              description:
                "Company",
              link: "https://en.wikipedia.org/wiki/Airbnb"
            },
            {
              name: "Maxis Studios",
              description:
                "Company",
              link: "https://en.wikipedia.org/wiki/Maxis"
            },
            {
              name: "San Myshuno",
              description:
                "Fictional Metropolis",
              link: "https://sims.fandom.com/wiki/San_Myshuno"
            }
          ]
        }
      },
      {
        id: "#load_venturebeat",
        route: "/articles_szilvi/venturebeat.html",
        issue: {
          type: ISSUE_TYPE.CREATION,
          index: 2
        },
        meta: {
          people: [
            {
              name: "Laura Miele",
              description:
                "Chief Studios Officer",
              link: "https://www.bloomberg.com/profile/person/19780925"
            },
            {
              name: "Geoff Keighley",
              description:
                "Video Game Journalist",
              link: "https://en.wikipedia.org/wiki/Geoff_Keighley"
            }
          ],
          places: [

          ],
          concepts: [
            {
              name: "Electronic Arts",
              description:
                "Company",
              link: "https://en.wikipedia.org/wiki/Electronic_Arts"
            },
            {
              name: "FIFA",
              description:
                "Football Organization",
              link: "https://en.wikipedia.org/wiki/FIFA"
            },
            {
              name: "SEED",
              description:
                "Group, Search for Extraordinary Experiences Division of Electronic Arts",
              link: "https://www.ea.com/seed"
            }

          ]
        }
      },
      {
        id: "#load_metropolis",
        route: "/articles_deniz/metropolis.html",
        issue: {
          type: ISSUE_TYPE.CREATION,
          index: 1
        },
        meta: {
          people: [
            {
              name: "Luke Pearson",
              description:
                "Lecturer in Architecture",
              link: "https://www.ucl.ac.uk/bartlett/architecture/people/luke-pearson"
            },

          ],
          places: [
            {
              name: "Oklahoma City",
              description:
                "City",
              link: "https://en.wikipedia.org/wiki/Oklahoma_City"
            },
            {
              name: "Toronto",
              description:
                "City",
              link: "https://en.wikipedia.org/wiki/Toronto"
            }
          ],
          concepts: [
            {
              name: "You+Pea",
              description:
                "Architectural Design Research Practice",
              link: "https://www.youandpea.com/"
            },
            {
              name: "Electronic Arts",
              description:
                "Company",
              link: "https://en.wikipedia.org/wiki/Electronic_Arts"
            },
          ]
        }
      }
    ];

    /**
     * ROUTING
     */
    let currentRoute = ""; //currentroute is our route
    let metaShow = false;
    let activeMeta = META_TYPE.PEOPLE; //the first meta type you show is people
    const switchRoute = (route, issue) => {
      currentRoute = route; //switch the article
      $("#iframeHolder").load(route, () => {
        if (currentStyle === "") { //if current style is active
          return;
        }
        const styleItem = styles.find(({ name }) => name === currentStyle); // search  current style from all  styles, sort out from the array which style is active
        removeAllStyles(); //remove all styles for navigation
        $("#iframeHolder").append(
          `<link rel="stylesheet" type="text/css" href="${styleItem.path}${styleItem.name}.css">`  //path of style, removing all the previous ones and append the new one
        );
      });
      changeMetaContent();
      $(".issue__nav").removeClass("d-none");
      switch (issue.index) {
        case 0:
          $("#issue__nav_prev").addClass("inactive");  //prev inactive next active, you cannot go back --> navigate inside the issue's list
          $("#issue__nav_next").removeClass("inactive");
          break; //break the loop
        case 1:
          $("#issue__nav_prev").removeClass("inactive"); //id of the div = select previous article from an issue list
          $("#issue__nav_next").removeClass("inactive"); //id of the div = select next article from an issue list they are both active!
          break;
        case 2:
          $("#issue__nav_prev").removeClass("inactive");
          $("#issue__nav_next").addClass("inactive"); // prev active, next inactive, you cannot go ahead
          break;
      }
    };
    availableRoutes.forEach(({ id, route, issue }) => {
      $(id).on("click", function() {
        switchRoute(route, issue);
      });
    });

    $("#issue__nav_prev").on("click", function() {
      const routeItem = availableRoutes.find(
        ({ route }) => route === currentRoute
      );
      if (routeItem.issue.index === 0) return; //set 0 at the issue index, first position
      const toGo = availableRoutes.find(
        ({ issue }) =>
          issue.type === routeItem.issue.type && //issue type to select inside the route item (psychology, society, content creation)
          issue.index === routeItem.issue.index - 1 //subtract 1 to the current index (0,1,2) to navigate inside the 3 articles treated by issue, the issue_nav_prev will make select and load the prev articles, goes back
      );
      switchRoute(toGo.route, toGo.issue);
    });
    $("#issue__nav_next").on("click", function() { //same with next
      const routeItem = availableRoutes.find(
        ({ route }) => route === currentRoute
      );
      if (routeItem.issue.index === 2) return;
      const toGo = availableRoutes.find(
        ({ issue }) =>
          issue.type === routeItem.issue.type &&
          issue.index === routeItem.issue.index + 1
      );
      switchRoute(toGo.route, toGo.issue);
    });

    /**
     * META HANDLING
     */
    const changeMetaContent = () => {
      const routeItem = availableRoutes.find(
        ({ route }) => route === currentRoute
      );
      $("#meta__div_content") //select the id of the div in which the metaview is loaded
        .removeClass("d-none") //remove display none
        .html(getMetaTemplate(routeItem.meta[activeMeta])); //call the function getMetaTemplate for the active route
    };
    Object.keys(META_TYPE).forEach(key => {
      $(`#meta__nav_${META_TYPE[key]}`).on("click", function() { //key = people place concepts, from the dict
        activeMeta = META_TYPE[key];
        const nonActiveKeys = Object.keys(META_TYPE).filter(k => k !== key);
        const activeKey = key;
        nonActiveKeys.forEach(inactiveKey =>
          $(`#meta__nav_${META_TYPE[inactiveKey]}`).removeClass("active") //when you change the card/the key, you remove "active" from the previous class and add active to the new class you want to see
        );
        $(`#meta__nav_${META_TYPE[activeKey]}`).addClass("active");
        changeMetaContent();
      });
    });
    $("#meta_data__button").on("click", function() {
      if (currentRoute === "") {
        // If no article is selected just return
        return;
      }
      metaShow = !metaShow;  //current route negation of metashow:if we showed it before now we hide it vica versa
      if (metaShow) { //if you show the metadata
        $("#meta__div").removeClass("d-none"); //let it see, remove d-none
        $("#iframeHolder").addClass("col-md-9"); //add this bootstrap class, col medium 9, to the iframeholder, to make the metaviewer load there
        $("#meta_data__button_show").addClass("d-none"); //the button before says show meta -->hide meta
        $("#meta_data__button_hide").removeClass("d-none"); //the button now says hide metadata
        changeMetaContent();
        return;
      }
      $("#meta__div").addClass("d-none"); //else metadata viewer is hidden
      $("#iframeHolder").removeClass("col-md-9"); //iframe original size
      $("#meta_data__button_show").removeClass("d-none"); //before button says hide metadata
      $("#meta_data__button_hide").addClass("d-none"); //button says show metadata
      $("#meta__div_content").addClass("d-none"); //don't show metadata viewer
    });

    /**
     * STYLE CHANGES
     */
    const removeAllStyles = () =>
      styles.forEach(({ name }) =>
        $(`link[rel=stylesheet][href*="${name}"]`).remove() //change style, remove all the previous styles
      );
    styles.forEach(({ name, path, id }) => {
      $(`${id}`).on("click", function() {  //click the given id in the styles navbar and so select the style onclick, after removing all of them
        removeAllStyles();
        $("#iframeHolder").append(
          `<link rel="stylesheet" type="text/css" href="${path}${name}.css">` //all appended on the id iframeholder
        );
        currentStyle = name;
      });
    });
  });
})();
