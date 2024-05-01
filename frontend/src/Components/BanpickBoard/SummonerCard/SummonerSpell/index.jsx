import React, { useContext } from 'react';
import { transparencyImg } from '../../../../Assets/img/import_img';
import { SummonerCardContext } from '../..';
export default function SummonerSpell({ teamColor, summoner, index }) {
  const {
    currentSelectingTeam,
    currentSelectingIndex,
    pickBanPhase,
    currentSelectingSpellNumber,
    recentVersion,

    setCurrentSelectingSpellNumber,
    setCurrentSelectingIndex,
    setCurrentSelectingTeam,
    setPickBanPhase,
    setGlobalPhase,
  } = useContext(SummonerCardContext);
  return (
    <div className="summoner__spell-wrap">
      <img
        className="summoner__spell"
        alt={`spell1-${summoner.spell1.data}`}
        onClick={() => {
          setCurrentSelectingSpellNumber(1);
          setCurrentSelectingIndex(index);
          setCurrentSelectingTeam(teamColor);
          setPickBanPhase('Spell');
          setGlobalPhase('PickBan');
        }}
        data-current-target={
          currentSelectingTeam === teamColor &&
          currentSelectingIndex === index &&
          pickBanPhase === 'Spell' &&
          currentSelectingSpellNumber === 1
        }
        src={
          summoner.spell1.data === ''
            ? transparencyImg
            : `${import.meta.env.VITE_API_BASE_URL}cdn/${recentVersion}/img/spell/${
                summoner.spell1.data
              }.png`
        }
      />
      <img
        className="summoner__spell"
        alt={`spell2-${summoner.spell2.data}`}
        onClick={() => {
          setCurrentSelectingSpellNumber(2);
          setCurrentSelectingIndex(index);
          setCurrentSelectingTeam(teamColor);
          setPickBanPhase('Spell');
          setGlobalPhase('PickBan');
        }}
        data-current-target={
          currentSelectingTeam === teamColor &&
          currentSelectingIndex === index &&
          pickBanPhase === 'Spell' &&
          currentSelectingSpellNumber === 2
        }
        src={
          summoner.spell2.data === ''
            ? transparencyImg
            : `${import.meta.env.VITE_API_BASE_URL}cdn/${recentVersion}/img/spell/${
                summoner.spell2.data
              }.png`
        }
      />
    </div>
  );
}
