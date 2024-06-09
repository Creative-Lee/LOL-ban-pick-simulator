import React, { useState } from 'react';
import { transparencyImg } from '../../../Assets/img/import_img/index';

const TeamSelectMenu = ({ teamColor, teamName, setTeamName }) => {
  const [isTeamSelectMenuOpen, setIsTeamSelectMenuOpen] = useState({
    blue: false,
    red: false,
  });

  const redTeamInlineStyle = {
    teamSelectMenu: { flexDirection: 'row-reverse' },
    nameSelect: { right: 0, left: `${20}%` },
    nameSelectChn: { right: 0, left: `${-80}%` },
  };
  const inlineStyle = teamColor === 'blue' ? {} : redTeamInlineStyle;

  const teamArr = ['KDF', 'T1', 'DK', 'BRO', 'DRX', 'GEN', 'HLE', 'KT', 'FEARX', 'NS'];
  const teamArrChn = [
    'BLG',
    'TES',
    'JDG',
    'FPX',
    'NIP',
    'LNG',
    'WBG',
    'OMG',
    'WE',
    'IG',
    'AL',
    'LGD',
    'TT',
    'RNG',
    'RA',
    'EDG',
    'UP',
  ];

  const toggleIsTeamSelectMenuOpen = (teamColor) => {
    setIsTeamSelectMenuOpen((prevState) => ({
      ...prevState,
      [teamColor]: !prevState[teamColor],
    }));
  };
  const closeTeamSelectMenu = (teamColor) => {
    setIsTeamSelectMenuOpen((prevState) => ({
      ...prevState,
      [teamColor]: false,
    }));
  };

  return (
    <label className="team__select-menu" style={inlineStyle.teamSelectMenu}>
      <div className="team__name">
        <input
          className="name__button"
          type="button"
          id="name-input"
          onClick={() => {
            toggleIsTeamSelectMenuOpen(teamColor);
          }}
          onBlur={() => {
            closeTeamSelectMenu(teamColor);
          }}
          value={teamName}
        />
        <ul className="name__select" style={inlineStyle.nameSelect} data-html2canvas-ignore>
          {isTeamSelectMenuOpen[teamColor] &&
            teamArr.map((team, index) => (
              <li
                className="name__option"
                key={index}
                onMouseDown={() => {
                  setTeamName(team);
                }}
              >
                <img className="option__logo" alt="logo" src={`/assets/team_logo/${team}.webp`} />
                <span className="option__span">{team}</span>
              </li>
            ))}
        </ul>
        <ul className="name__select__chn" style={inlineStyle.nameSelectChn} data-html2canvas-ignore>
          {isTeamSelectMenuOpen[teamColor] &&
            teamArrChn.map((team, index) => (
              <li
                className="name__option"
                key={index}
                onMouseDown={() => {
                  setTeamName(team);
                }}
              >
                <img className="option__logo" alt="logo" src={`/assets/team_logo/${team}.webp`} />
                <span className="option__span">{team}</span>
              </li>
            ))}
        </ul>
      </div>
      <div className="team__logo">
        <img
          className="logo"
          alt={`${teamColor}-team-logo-${teamName}`}
          src={
            teamName === 'Blue' || teamName === 'Red'
              ? transparencyImg
              : `/assets/team_logo/${teamName}.webp`
          }
        />
      </div>
    </label>
  );
};

export default React.memo(TeamSelectMenu);
