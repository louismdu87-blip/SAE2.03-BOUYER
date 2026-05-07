-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : jeu. 07 mai 2026 à 20:11
-- Version du serveur : 10.11.14-MariaDB-0+deb12u2
-- Version de PHP : 8.3.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bouyer17`
--

-- --------------------------------------------------------

--
-- Structure de la table `Category`
--

CREATE TABLE `Category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `Category`
--

INSERT INTO `Category` (`id`, `name`) VALUES
(1, 'Action'),
(2, 'Comédie'),
(3, 'Drame'),
(4, 'Science-fiction'),
(5, 'Animation'),
(6, 'Thriller'),
(7, 'Horreur'),
(8, 'Aventure'),
(9, 'Fantaisie'),
(10, 'Documentaire');

-- --------------------------------------------------------

--
-- Structure de la table `Favoris`
--

CREATE TABLE `Favoris` (
  `id_profile` int(11) NOT NULL,
  `id_movie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Favoris`
--

INSERT INTO `Favoris` (`id_profile`, `id_movie`) VALUES
(1, 7),
(1, 78),
(1, 87),
(1, 92),
(2, 89),
(3, 89);

-- --------------------------------------------------------

--
-- Structure de la table `Movie`
--

CREATE TABLE `Movie` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `year` int(11) DEFAULT NULL,
  `length` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `director` varchar(255) DEFAULT NULL,
  `id_category` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `trailer` varchar(255) DEFAULT NULL,
  `min_age` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `Movie`
--

INSERT INTO `Movie` (`id`, `name`, `year`, `length`, `description`, `director`, `id_category`, `image`, `trailer`, `min_age`) VALUES
(7, 'Interstellar', 2014, 169, 'Un groupe d\'explorateurs voyage à travers un trou de ver pour sauver l\'humanité.', 'Christopher Nolan', 4, 'interstellar.jpg', 'https://www.youtube.com/embed/VaOijhK3CRU?si=76Ke4uw4LYjuLuQ6', 12),
(12, 'La Liste de Schindler', 1993, 195, 'Un industriel allemand sauve des milliers de Juifs pendant l\'Holocauste.', 'Steven Spielberg', 3, 'schindler.webp', 'https://www.youtube.com/embed/ONWtyxzl-GE?si=xC3ASGGPy5Ib-aPn', 16),
(17, 'Your Name', 2016, 107, 'Deux adolescents échangent leurs corps de manière mystérieuse.', 'Makoto Shinkai', 5, 'your_name.jpg', 'https://www.youtube.com/embed/AROOK45LXXg?si=aUQyGk2VMCb_ToUL', 10),
(27, 'Le Bon, la Brute et le Truand', 1966, 161, 'Trois hommes se lancent à la recherche d\'un trésor caché.', 'Sergio Leone', 8, 'bon_brute_truand.jpg', 'https://www.youtube.com/embed/WA1hCZFOPqs?si=TwNZAoM4oj4KpGja', 12),
(56, 'Shrek', 2001, 90, 'Un ogre misanthrope voit son marais envahi par des créatures de contes de fées.', 'Andrew Adamson', 5, 'shrek.jpg', 'https://www.youtube.com/embed/CwXOrWvPBPk', 0),
(59, 'Kiki la petite sorcière', 1989, 103, 'Une jeune sorcière part de chez elle pour accomplir son apprentissage en ville.', 'Hayao Miyazaki', 5, 'kiki.jpg', 'https://www.youtube.com/embed/4bG17OYs-GA', 0),
(60, 'L\'Âge de Glace', 2002, 81, 'Trois animaux préhistoriques ramènent un bébé humain à sa tribu.', 'Chris Wedge', 5, 'ice_age.jpg', 'https://www.youtube.com/embed/i4noiCRJRoE', 0),
(70, 'Alien, le huitième passager', 1979, 117, 'L\'équipage d\'un vaisseau commercial est traqué par une créature mortelle dans l\'espace.', 'Ridley Scott', 7, 'alien.jpg', 'https://www.youtube.com/embed/LjLamj-b0I8', 12),
(71, 'Terminator 2 : Le Jugement dernier', 1991, 137, 'Un cyborg du futur protège un adolescent d\'un assassin robotique plus avancé.', 'James Cameron', 1, 'terminator2.jpg', 'https://www.youtube.com/embed/CRRlbK5w8AE', 12),
(72, 'Psychose', 1960, 109, 'Une secrétaire en fuite se réfugie dans un motel isolé tenu par un jeune homme étrange.', 'Alfred Hitchcock', 7, 'psycho.jpg', 'https://www.youtube.com/embed/Wz719b9QUqY', 12),
(78, 'Joker', 2019, 122, 'Un comédien raté et marginalisé sombre peu à peu dans la folie.', 'Todd Phillips', 3, 'joker.jpg', 'https://www.youtube.com/embed/zAGVQLHvwOY', 12),
(86, 'Titanic', 1997, 194, 'Une aristocrate tombe amoureuse d\'un artiste pauvre à bord du célèbre paquebot.', 'James Cameron', 3, 'titanic.jpg', 'https://www.youtube.com/embed/kVrqfYjkTdQ', 10),
(87, 'Star Wars, épisode IV : Un nouvel espoir', 1977, 121, 'Un jeune fermier rejoint une rébellion pour sauver la galaxie de l\'Empire.', 'George Lucas', 4, 'star_wars_4.jpg', 'https://www.youtube.com/embed/vZ734NWnAHA', 0),
(88, 'Le Parrain', 1972, 175, 'Le patriarche vieillissant d\'une dynastie mafieuse transfère le contrôle de son empire à son fils.', 'Francis Ford Coppola', 3, 'parrain.jpg', 'https://www.youtube.com/embed/sY1S34973zA', 12),
(89, 'Retour vers le futur', 1985, 116, 'Un adolescent est accidentellement renvoyé en 1955 dans une machine à voyager dans le temps.', 'Robert Zemeckis', 4, 'bttf.jpg', 'https://www.youtube.com/embed/qvsgGtivCgs', 0),
(90, 'Les Aventuriers de l\'arche perdue', 1981, 115, 'Un archéologue audacieux est engagé pour retrouver l\'Arche d\'alliance avant les nazis.', 'Steven Spielberg', 8, 'indiana_jones.jpg', 'https://www.youtube.com/embed/0xHQMU-EvyU', 10),
(91, 'Harry Potter à l\'école des sorciers', 2001, 152, 'Un jeune garçon orphelin découvre qu\'il est un sorcier et intègre l\'école de Poudlard.', 'Chris Columbus', 9, 'harry_potter_1.jpg', 'https://www.youtube.com/embed/VyHV0BRtcXw', 10),
(92, 'Avengers: Endgame', 2019, 181, 'Les Avengers survivants se réunissent pour réparer les dégâts causés par Thanos.', 'Anthony et Joe Russo', 1, 'endgame.jpg', 'https://www.youtube.com/embed/TcMBFSGVi1c', 10),
(93, 'Le Fabuleux Destin d\'Amélie Poulain', 2001, 122, 'Une jeune serveuse parisienne décide d\'améliorer la vie des gens qui l\'entourent.', 'Jean-Pierre Jeunet', 2, 'amelie.jpg', 'https://www.youtube.com/embed/HUECWi5pX7o', 0),
(94, 'The Truman Show', 1998, 103, 'Un vendeur d\'assurances découvre que toute sa vie est en réalité une émission de télé-réalité.', 'Peter Weir', 3, 'truman_show.jpg', 'https://www.youtube.com/embed/dlnmQbPGuls', 10),
(95, 'Pirates des Caraïbes : La Malédiction du Black Pearl', 2003, 143, 'Un forgeron s\'allie à un pirate excentrique pour sauver la femme qu\'il aime.', 'Gore Verbinski', 8, 'pirates_caraibes.jpg', 'https://www.youtube.com/embed/naQr0uTrH_s', 10);

-- --------------------------------------------------------

--
-- Structure de la table `Profile`
--

CREATE TABLE `Profile` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `avatar` varchar(255) DEFAULT 'placeholderProfile.svg',
  `min_age` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Profile`
--

INSERT INTO `Profile` (`id`, `name`, `avatar`, `min_age`) VALUES
(1, 'Louis', 'louis.jpg', 18),
(2, 'Baptiste', 'placeholderProfile.svg', 16),
(3, 'Ben', 'placeholderProfile.svg', 12),
(4, 'jean', 'placeholderProfile.svg', 10),
(5, 'martin', 'martin.svg', 10);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Favoris`
--
ALTER TABLE `Favoris`
  ADD PRIMARY KEY (`id_profile`,`id_movie`);

--
-- Index pour la table `Movie`
--
ALTER TABLE `Movie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_category` (`id_category`);

--
-- Index pour la table `Profile`
--
ALTER TABLE `Profile`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Category`
--
ALTER TABLE `Category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `Movie`
--
ALTER TABLE `Movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT pour la table `Profile`
--
ALTER TABLE `Profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Movie`
--
ALTER TABLE `Movie`
  ADD CONSTRAINT `movie_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `Category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
