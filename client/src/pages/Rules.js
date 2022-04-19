import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Rules() {
  const [show, setShow] = useState(false);

  return (
    <div className="main">
      <div className="main2">
        <h1>Rules</h1>
      </div>
      {/* <> */}
      <div className="main2">
        <Button
          variant="secondary"
          size="lg"
          onClick={() => setShow(true)}
        >
          Sand Rules and what we Tolerate & Allowed
        </Button>

        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Sand Rules and what we Tolerate & Allowed
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ol>
              <li>
                No Smoking on the sand courts or within 15 feet of courts,
                Smoking allowed in designatedarea only.
              </li>
              <li>
                No Using tobacco products (dip) on the sand only in the seating
                area
              </li>
              <li>
                No Spitting in the sand (We are all barefoot, so please spit
                outside of the sand.)
              </li>
              <li>Food in designated area only.</li>
              <li>No Glass containers</li>
              <li>No Hanging or pulling on nets</li>
              <li>No Adjusting nets (nets can be adjusted by staff)</li>
              <li>No Kicking balls against fence</li>
              <li>
                No dogs on the sand courts, Dogs can be on leashes around the
                courts or in seating areas.
              </li>
              <li>NO Firearms or weapons Allowed</li>
            </ol>
          </Modal.Body>
        </Modal>
      </div>
      {/* </> */}
      {/* <> */}
      <div className="main2">
        <Button
          variant="outline-secondary"
          size="lg"
          onClick={() => setShow(true)}
        >
          Sand Rules and what we Tolerate & Allowed
        </Button>

        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Sand Rules and what we Tolerate & Allowed
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ol>
              <li>
                No Smoking on the sand courts or within 15 feet of courts,
                Smoking allowed in designatedarea only.
              </li>
              <li>
                No Using tobacco products (dip) on the sand only in the seating
                area
              </li>
              <li>
                No Spitting in the sand (We are all barefoot, so please spit
                outside of the sand.)
              </li>
              <li>Food in designated area only.</li>
              <li>No Glass containers</li>
              <li>No Hanging or pulling on nets</li>
              <li>No Adjusting nets (nets can be adjusted by staff)</li>
              <li>No Kicking balls against fence</li>
              <li>
                No dogs on the sand courts, Dogs can be on leashes around the
                courts or in seating areas.
              </li>
              <li>NO Firearms or weapons Allowed</li>
            </ol>
          </Modal.Body>
        </Modal>
      </div>
      {/* </> */}
    </div>
  );
}

export default Rules;

/*
 <div>
        <div>
          <h1>Rules</h1>
          <h3>Sand Rules and what we Tolerate & Allowed</h3>

          <ol>
            <li>
              No Smoking on the sand courts or within 15 feet of courts, Smoking
              allowed in designatedarea only.
            </li>
            <li>
              No Using tobacco products (dip) on the sand only in the seating
              area
            </li>
            <li>
              No Spitting in the sand (We are all barefoot, so please spit
              outside of the sand.)
            </li>
            <li>Food in designated area only.</li>
            <li>No Glass containers</li>
            <li>No Hanging or pulling on nets</li>
            <li>No Adjusting nets (nets can be adjusted by staff)</li>
            <li>No Kicking balls against fence</li>
            <li>
              No dogs on the sand courts, Dogs can be on leashes around the
              courts or in seating areas.
            </li>
            <li>NO Firearms or weapons Allowed</li>
          </ol>

          <dl class="myDl row">
            <dt class="col-md-3 align-self-center">
              <img
                src="images/rules-food.jpg"
                class="img-fluid rounded-3"
                alt=""
              />
            </dt>
            <dd class="col-md-9 align-self-center">
              <h3>FOOD & BEVERAGE</h3>
              <ul>
                <li>
                  Outside Drinks are not allowed. You can bring Water jugs.
                </li>
                <li>
                  Responsible drinking please, Alcoholic beverages will be sold
                  on premises.
                </li>
                <li>Outside food is allowed.</li>
              </ul>
            </dd>
          </dl>
          <dl class="myDl row">
            <dt class="col-md-3 align-self-center">
              <img
                src="images/rules-eq.jpg"
                class="img-fluid rounded-3"
                alt=""
              />
            </dt>
            <dd class="col-md-9 align-self-center">
              <h3>GAME EQUIPMENT</h3>
              <p>
                {' '}
                BSS Volleys will provide all necessary equipment, (nets /
                lines). Teams are allowed to bring their own balls. We are not
                responsible for lost or stolen balls.
              </p>
            </dd>
          </dl>
          <dl class="myDl row">
            <dt class="col-md-3 align-self-center">
              <img
                src="images/rules-wai.jpg"
                class="img-fluid rounded-3"
                alt=""
              />
            </dt>
            <dd class="col-md-9 align-self-center">
              <h3>WAIVERS :</h3>
              <p>
                In order to participate in a league, each player must sign a
                waiver. Players must agree to the waiver electronically when
                they register. Captains are responsible to ensure all players
                that play on their team are registered to play and have signed
                the waiver prior to the first game.
              </p>
            </dd>
          </dl>
          <dl class="myDl row">
            <dt class="col-md-3 align-self-center">
              <img
                src="images/rules-ros.jpg"
                class="img-fluid rounded-3"
                alt=""
              />
            </dt>
            <dd class="col-md-9 align-self-center">
              <h3>ROSTER :</h3>
              <p>
                There is a maximum number of players allowed on a team roster;
              </p>
              <ul>
                <li>4s are allowed 6 players on their roster</li>
                <li>6s are allowed to have 9 players on their roster</li>
                <li>
                  2s are not allowed to have additional players on their roster
                </li>
              </ul>
              <p>
                All players must be registered and must sign a waiver to be able
                to participate. Only players that have registered and signed the
                waiver will be allowed to participate.
              </p>
            </dd>
          </dl>
          <dl class="myDl row">
            <dt class="col-md-3 align-self-center">
              <img
                src="images/rules-spo.jpg"
                class="img-fluid rounded-3"
                alt=""
              />
            </dt>
            <dd class="col-md-9 align-self-center">
              <h3>SPORTSMANSHIP :</h3>
              <p>
                BSS Volley expects all participants to play with the highest
                level of sportsmanship. Rude or demeaning behavior to staff,
                referees, the opposing team, and/or your own team members will
                not be tolerated under any circumstances. Unsportsmanlike
                behavior may result in that player being ejected from the game.
                An ejection may result in further suspension from participation
                in current and/or future events. An ejected player is required
                to leave the premises immediately. Refusal to leave the premises
                may result in a team forfeit and/or suspension. Any disputes or
                complaints regarding the referee's handling of a game or
                ejection will be addressed and handled by BSS Volley. On the day
                of the incident, the referee's decision will be considered final
                and disputes will not be addressed by the league.
              </p>
            </dd>
          </dl>
          <dl class="myDl row">
            <dt class="col-md-3 align-self-center">
              <img
                src="images/rules-wea.jpg"
                class="img-fluid rounded-3"
                alt=""
              />
            </dt>
            <dd class="col-md-9 align-self-center">
              <h3>INCLEMENT WEATHER POLICY :</h3>
              <p>
                In the event of inclement weather, BSS Volley will make every
                reasonable attempt to make-up all scheduled games. In the event
                of multiple cancellations, BSS Volley reserves the right to
                shorten the regular season and/or the play-off schedule if there
                is one (and the number of teams that make the play-offs) if
                inclement weather dictates such action. If necessary, make-up
                games may be scheduled on days other than the regularly
                scheduled days of the league. Neither refunds nor pro-rated
                refunds will be given if the season is shortened due to
                inclement weather or by actions taken by BSS Volley, we will
                address every situation uniquely and will always keep the best
                interest of our players in mind.
              </p>
            </dd>
          </dl>
          <dl class="myDl row">
            <dt class="col-md-3 align-self-center">
              <img
                src="images/rules-tea.jpg"
                class="img-fluid rounded-3"
                alt=""
              />
            </dt>
            <dd class="col-md-9 align-self-center">
              <h3>TEAMS :</h3>
              <p>
                There will be a 5 minute grace period for start of all games. If
                a team does not possess the minimum amount of players to start
                (4s league - minimum 2 players/ 6s league - minimum 4 players)
                once the grace period has expired, the opposing team will
                receive a win for the first game of the match. If the team does
                not possess the minimum number of players by the beginning of
                the second game (or 15 minutes past game time, whichever comes
                first), a forfeit will be assessed. Teams may continue to finish
                out the games but the opposing team will still receive the match
                win.
              </p>
              <p>
                You can sign up as an individually or a team. Individuals will
                be placed on a team of 4. You can also sign up individually and
                request to be placed with a friend.
              </p>
              <ul>
                <li>
                  Teams will consist a minimum of 4 and a maximum of 6 players.
                </li>
                <li>
                  At least TWO people from your roster must be present. (Any
                  gender)
                </li>
                <li>The games will be 4 versus 4 Co-Ed.</li>
                <li>
                  You may only have as many subs as players on your roster. For
                  example, if you registered a team of 5 and one person is out,
                  you can still get a sub to satisfy your total roster count.
                </li>
                <li>All team members should wear their league t-shirts.</li>
              </ul>
            </dd>
          </dl>
          <dl class="myDl row">
            <dt class="col-md-3 align-self-center">
              <img
                src="images/rules-sco.jpg"
                class="img-fluid rounded-3"
                alt=""
              />
            </dt>
            <dd class="col-md-9 align-self-center">
              <h3>SCORING :</h3>
              <p>
                All games will be played using rally scoring where points will
                be awarded regardless of which team is serving. Each match will
                consist of the best of 3 games. The first 2 games will be played
                to 21 points and the third game will be played to 15 points.
                Play continues until a two point advantage is reached. The team
                that wins two games first shall be declared the winner. Teams
                may play a third consolation game if a winner has already been
                declared and time permits.
              </p>
            </dd>
          </dl>
          <dl class="myDl row">
            <dt class="col-md-3 align-self-center">
              <img
                src="images/rules-tim.jpg"
                class="img-fluid rounded-3"
                alt=""
              />
            </dt>
            <dd class="col-md-9 align-self-center">
              <h3>TIME OUTS :</h3>
              <p>
                Each team is allowed 1 - 60 second timeout per game. Timeouts do
                not carry over.
              </p>
            </dd>
          </dl>
          <dl class="myDl row">
            <dt class="col-md-3 align-self-center">
              <img
                src="images/rules-sub.jpg"
                class="img-fluid rounded-3"
                alt=""
              />
            </dt>
            <dd class="col-md-9 align-self-center">
              <h3>TEAM SUBSTITUTIONS DURING GAMES :</h3>
              <p>
                Substitutions can only be made at the service position in the
                rotation, i.e. the substitute becomes the server. If a team
                illegally substitutes a player (not replaced at the service
                position), that team will lose their serve immediately.
              </p>
            </dd>
          </dl>
          <dl class="myDl row">
            <dt class="col-md-3 align-self-center">
              <img
                src="images/rules-sub2.jpg"
                class="img-fluid rounded-3"
                alt=""
              />
            </dt>
            <dd class="col-md-9 align-self-center">
              <h3>SUBSTITUTE PLAYERS</h3>
              <p>
                Teams may find subs for players that are out during regular
                season games. The sub must not be a higher level than the person
                they are subbing for. If a sub is determined to be a higher
                level than the person they are subbing for the team will be
                forced to forfeit their match/game but will be able to
                finish/play. No subs are allowed during playoffs, all players
                must be on the roster.
              </p>
            </dd>
          </dl>
          <dl class="myDl row">
            <dt class="col-md-3 align-self-center">
              <img
                src="images/rules-gam.jpg"
                class="img-fluid rounded-3"
                alt=""
              />
            </dt>
            <dd class="col-md-9 align-self-center">
              <h3>GAME PLAY :</h3>
              <p>- A block does NOT count as a touch.</p>
            </dd>
          </dl>
          <dl class="myDl row">
            <dt class="col-md-3 align-self-center">
              <img
                src="images/rules-rul.jpg"
                class="img-fluid rounded-3"
                alt=""
              />
            </dt>
            <dd class="col-md-9 align-self-center">
              <h3>Competitive Rules Only :</h3>
              <p>
                <ul>
                  <li>No open hand-receive.</li>
                  <li>Doubles Rules (minus blocks, not counting as touch).</li>
                  <li>
                    Doubles on hand-sets will be called. Maximum of 2.5
                    rotations on the ball. Ball has to come out of the hands
                    clean.
                  </li>
                  <li>
                    Hand sets can't go over unless it was unintentional and due
                    to wind. You can push the ball over/or behind as long as
                    your feet/shoulders are squared to the trajectory of the
                    ball and the push is not a double.
                  </li>
                  <li>A block does not count as a touch.</li>
                </ul>
              </p>
            </dd>
          </dl>
          <dl class="myDl row">
            <dt class="col-md-3 align-self-center">
              <img
                src="images/rules-rul2.jpg"
                class="img-fluid rounded-3"
                alt=""
              />
            </dt>
            <dd class="col-md-9 align-self-center">
              <h3>Recreational Rules :</h3>
              <p>
                <ul>
                  <li>Doubles will not be called on hand-sets.</li>
                  <li>
                    Open-hand receive is allowed on all balls (including
                    serves).
                  </li>
                  <li>
                    Pushing over is allowed as long as feet/arms are squared.
                    You are not allowed to push on serves though.
                  </li>
                  <li>Jump pushing in any direction is NOT allowed.</li>
                  <li>No open-hand dunks (redirections) allowed.</li>
                </ul>
              </p>
            </dd>
          </dl>
          <dl class="myDl row">
            <dt class="col-md-3 align-self-center">
              <img
                src="images/rules-ref.jpg"
                class="img-fluid rounded-3"
                alt=""
              />
            </dt>
            <dd class="col-md-9 align-self-center">
              <h3>REFEREES :</h3>
              <p>
                <ul>
                  <li>
                    Every team will be assigned to ref 3-5 games for the season.
                    You may split up refereeing matches between team members.
                  </li>
                  <li>
                    All refs should read the rules above before refereeing.
                  </li>
                </ul>
              </p>
            </dd>
          </dl>
          <dl class="myDl row">
            <dt class="col-md-3 align-self-center">
              <img
                src="images/rules-pla.jpg"
                class="img-fluid rounded-3"
                alt=""
              />
            </dt>
            <dd class="col-md-9 align-self-center">
              <h3>SEEDING FOR PLAYOFFS:</h3>
              <p>
                Playoff seeding will be determined by the best overall records.
                In the event that 2 teams are tied with the same record,
                head-to-head matchups will determine higher seeding whenever
                possible. When head-to-head matchups cannot clearly determine a
                higher seed, or when 3 or more teams are tied, tiebreakers will
                be determined in the following order:
              </p>
              <p>
                (1) head-to-head matchups (for 2 way ties), (2) highest team
                point differentials for the season & (3) coin flip.
              </p>
            </dd>
          </dl>
          <dl class="myDl row">
            <dt class="col-md-3 align-self-center">
              <img
                src="images/rules-sch.jpg"
                class="img-fluid rounded-3"
                alt=""
              />
            </dt>
            <dd class="col-md-9 align-self-center">
              <h3>Scheduling :</h3>
              <p>
                <ul>
                  <li>
                    The schedule for the entire season and reffing assignment
                    will be posted at LeagueApp
                  </li>
                  <li>
                    The season will be at least 6 weeks long with one double
                    hitter nigt. 7 weeks total including championship playoffs.
                  </li>
                  <li>
                    Playoffs will vary between seasons, normally will consist of
                    at least 4 teams per division.
                  </li>
                  <li>You may have a bye-week and double-headers.</li>
                  <li>
                    Please be on time. There's a 5 minute warm-up unless the
                    games are running behind. Please be ready to play as soon as
                    the previous game is done if that game is running over.
                  </li>
                </ul>
              </p>
            </dd>
          </dl>
          <dl class="myDl row">
            <dt class="col-md-3 align-self-center">
              <img
                src="images/rules-sch2.jpg"
                class="img-fluid rounded-3"
                alt=""
              />
            </dt>
            <dd class="col-md-9 align-self-center">
              <h3>SUBSTITUTION RULES :</h3>
              <p>Adult volleyball teams are only</p>
            </dd>
          </dl>

          <h2>SUBSTITUTION RULES</h2>
          <ul>
            <li>
              Adult volleyball teams are only permitted to substitute a player
              on their side-out; substitutions must be acknowledged by the
              official.
            </li>
            <li>
              Side out substitutions enter the match into the serving position.
            </li>
            <li>
              Players arriving late must wait for a dead ball/end of point to
              fill a missing position.
            </li>
            <li>
              If a team illegally substitutes a player, that team will lose
              their serve immediately.
            </li>
          </ul>

          <h2>SERVING</h2>
          <ul>
            <li>
              A team earns service possession for the start of the first game by
              winning Rock/Paper/Scissors.
            </li>
            <li>
              A legal serve is one that crosses the net and is either touched by
              an opposing player or lands within the opposing team's area of the
              court within the boundary lines. A serve that makes contact with
              the net and carries over to the opponent's side of the net is a
              live serve and must be returned.
            </li>
            <li>
              Jump serves are not permitted. Any player attempting to jump serve
              will receive a penalty.
            </li>
            <li>
              When the serving team wins the rally, the player who served
              before, serves again.
            </li>
            <li>
              When the receiving team wins the rally, it gains the right to
              serve and must rotate the server but does not have to rotate
              position on the court.
            </li>
            <li>
              Players on the receiving team cannot block or attack a serve.
            </li>
          </ul>
          <h2>PLAYING THE BALL</h2>
          <ul>
            <li>In 4's every player is eligible to attack the net.</li>
            <li>
              Each team is allowed a maximum of 3 successive contacts of the
              ball in order to return the ball to the opponent's area.
            </li>
            <li>
              Open hand dinks are illegal. An open hand allows the player to
              affect the direction of the ball by using fingertips in
              conjunction with the twist of the wrist.
            </li>
            <li>
              Returning a serve with a set is illegal and must be “passed” with
              a bump (hands together below the wrist) or with your hands
              together (above the waist). All other hits may be set clean or
              spiked.
            </li>
            <li>
              When setting the ball over the net, the players shoulders must be
              square to the direction of the set.
            </li>
            <li>
              Players are not permitted to scoop, hold or lift the ball. The
              ball must be clearly hit.
            </li>
            <li>
              There is no center-line. You may cross under the net providing
              that you do not contact a player from the other side or hinder
              their play of the ball.
            </li>
            <li>
              The ball must cross the plane of the net before contact may be
              made unless it is the 3rd hit by the offense and the contact is
              made to block the shot.
            </li>
            <li>
              Contact with the net is a violation. This includes contact made by
              hats, hair or clothing.
            </li>
            <li>
              Crossing or playing over any of the ball guards is a dead ball.
            </li>
            <li>Crossing into the other courts is a dead ball.</li>
            <li>
              A stray ball onto the court constitutes a replay if it comes in
              during play.
            </li>
          </ul>

          <h2>BLOCKING</h2>
          <ul>
            <li>
              Blocking is the action close to the net which intercepts the ball
              coming from the opponent's side by making contact with the ball
              before, during or after it crosses the net.
            </li>
            <li>
              A block contact is not counted as a team hit, and a team is
              entitled to 3 hits to return the ball.
            </li>
            <li>
              The first hit after the block may be executed by any player,
              including the one who blocked the ball.
            </li>
          </ul>
          <h2>FORFEIT RULE</h2>
          <ul>
            <li>
              If your team forfeits a game during regular season play, the
              following rules apply:
              <ul>
                <li>First Offense: Loss of game. Score marked: 21-0, 21-0.</li>
                <li>
                  Second Offense: Loss of game and lost ability to make
                  playoffs.
                </li>
                <li>Third Offense: Removal from the volleyball league.</li>
              </ul>
            </li>
            <li>
              If you know in advance that your team is going to forfeit a game,
              we encourage you to contact us so we can inform your opponent.
            </li>
            <li>
              Teams have until ten minutes past the designated start time to
              field a full squad (or the volleyball league minimum of players
              required according to rules). If at that time a team is unable to
              field a legal team, they forfeit the game. The teams may utilize
              the playing field during their allotted time to play an unofficial
              game. The official score will be marked as a loss with the
              respective forfeit score.
            </li>
          </ul>
          <h2>OFFICIALS</h2>
          <ul>
            <li>All games will be officiated by volleyball league staff.</li>
            <li>
              Only the team captain from each team may approach the official to
              dispute or question a call. In the end the call made by the
              official is final.
            </li>
          </ul>
        </div>
      </div>
*/
