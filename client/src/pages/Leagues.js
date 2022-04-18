import React from 'react';
import './styles.css';

function Leagues() {
  return (
    <div className="main">
      <div>
        <h1>Leagues</h1>
        <dl>
          <dt>Social/Recreational:</dt>
          <dd>
            Basic understanding of the game, limited skills & playing to have
            fun (no setting or serve receive rules)
          </dd>
        </dl>
        <dl>
          <dt>Competitive:</dt>
          <dd>
            Understands game strategies, good skills, control & consistency
          </dd>
        </dl>

        <div>
          <div>
            <h2>League Days, Time and Dates</h2>
            <h3>All league have 7 Games + Playoffs</h3>
            <dl>
              <dt>Monday</dt>
              <dd>
                <strong>4v4 League Coed</strong>
                <br />
                Hays Park & Recreational Night
                <br />
                Stat time for play is at 6 pm to 12 pm midnight depending on
                teams
              </dd>
            </dl>

            <dl>
              <dt>Tuesday</dt>
              <dd>
                <strong>6v6 League Coed</strong>
                <br />
                Two Division Competitive / Recreational Team sign up or Free
                Agent
                <br />
                Stat time for play is at 6 pm to 12 pm midnight depending on
                teams
              </dd>
            </dl>

            <dl>
              <dt>Wednesday</dt>
              <dd>
                <strong>Pride night 4v4 coed</strong>
                <br />
                Two Division Competitive / Recreational
                <br />
                Stat time for play is at 6 pm to 12 pm midnight depending on
                teams
              </dd>
            </dl>

            <dl>
              <dt>Thursday</dt>
              <dd>
                <strong>Open Play 7-9p.m. - $5.00 play Vemo</strong>
              </dd>
            </dl>

            <dl>
              <dt>Friday</dt>
              <dd>
                <strong>4v4 League Coed</strong>
                <br />
                Stat time for play is at 6 pm to 12 pm midnight depending on
                teams
              </dd>
            </dl>

            <dl>
              <dt>Saturday</dt>
              <dd>
                <strong>Open Play / Tournaments</strong>
              </dd>
            </dl>

            <dl>
              <dt>Sunday</dt>
              <dd>
                <strong>6v6 League Coed</strong>
                <br />
                Stat time for play is at 6 pm to 12 pm midnight depending on
                teams
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leagues;
