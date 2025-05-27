import Main from "@/Main.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import { PixelawProvider, usePixelawProvider } from "@pixelaw/react";
import { BrowserRouter } from "react-router-dom";
import { DojoEngine } from "@pixelaw/core-dojo";
import { MudEngine } from "@pixelaw/core-mud";
import { getCoreDefaultsFromUrl, getWorldForUrl } from "@/utils.ts";
import { StarknetChainProvider } from "@pixelaw/react-dojo";
import type { WorldsRegistry } from "@pixelaw/core";
import worldsRegistry from "@/config/worlds.json";
import { setupWorld } from "@/config/contracts.gen";
import { DojoWallet } from "@pixelaw/core-dojo";
import { PwarContext } from "./provider/PwarContext";

const pwarManifest = [
  {
    "address": "0xd1e895319120004075fdd61571f3e3aa90e89a2b0f22462775e4a63408d0c5",
    "class_hash": "0x57045b4433b2cbae0e955c27d092cd263446ddfc31a010708f23794bcbbabdb",
    "abi": [
      {
        "type": "impl",
        "name": "actions__ContractImpl",
        "interface_name": "dojo::contract::interface::IContract"
      },
      {
        "type": "interface",
        "name": "dojo::contract::interface::IContract",
        "items": []
      },
      {
        "type": "impl",
        "name": "actions__DeployedContractImpl",
        "interface_name": "dojo::meta::interface::IDeployedResource"
      },
      {
        "type": "struct",
        "name": "core::byte_array::ByteArray",
        "members": [
          {
            "name": "data",
            "type": "core::array::Array::<core::bytes_31::bytes31>"
          },
          {
            "name": "pending_word",
            "type": "core::felt252"
          },
          {
            "name": "pending_word_len",
            "type": "core::integer::u32"
          }
        ]
      },
      {
        "type": "interface",
        "name": "dojo::meta::interface::IDeployedResource",
        "items": [
          {
            "type": "function",
            "name": "dojo_name",
            "inputs": [],
            "outputs": [
              {
                "type": "core::byte_array::ByteArray"
              }
            ],
            "state_mutability": "view"
          }
        ]
      },
      {
        "type": "impl",
        "name": "ActionsImpl",
        "interface_name": "pixelaw::core::actions::IActions"
      },
      {
        "type": "struct",
        "name": "pixelaw::core::models::pixel::Pixel",
        "members": [
          {
            "name": "x",
            "type": "core::integer::u16"
          },
          {
            "name": "y",
            "type": "core::integer::u16"
          },
          {
            "name": "app",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "color",
            "type": "core::integer::u32"
          },
          {
            "name": "created_at",
            "type": "core::integer::u64"
          },
          {
            "name": "updated_at",
            "type": "core::integer::u64"
          },
          {
            "name": "timestamp",
            "type": "core::integer::u64"
          },
          {
            "name": "owner",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "text",
            "type": "core::felt252"
          },
          {
            "name": "action",
            "type": "core::felt252"
          }
        ]
      },
      {
        "type": "enum",
        "name": "core::option::Option::<core::integer::u32>",
        "variants": [
          {
            "name": "Some",
            "type": "core::integer::u32"
          },
          {
            "name": "None",
            "type": "()"
          }
        ]
      },
      {
        "type": "enum",
        "name": "core::option::Option::<core::starknet::contract_address::ContractAddress>",
        "variants": [
          {
            "name": "Some",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "None",
            "type": "()"
          }
        ]
      },
      {
        "type": "enum",
        "name": "core::option::Option::<core::felt252>",
        "variants": [
          {
            "name": "Some",
            "type": "core::felt252"
          },
          {
            "name": "None",
            "type": "()"
          }
        ]
      },
      {
        "type": "enum",
        "name": "core::option::Option::<core::integer::u64>",
        "variants": [
          {
            "name": "Some",
            "type": "core::integer::u64"
          },
          {
            "name": "None",
            "type": "()"
          }
        ]
      },
      {
        "type": "struct",
        "name": "pixelaw::core::models::pixel::PixelUpdate",
        "members": [
          {
            "name": "x",
            "type": "core::integer::u16"
          },
          {
            "name": "y",
            "type": "core::integer::u16"
          },
          {
            "name": "color",
            "type": "core::option::Option::<core::integer::u32>"
          },
          {
            "name": "owner",
            "type": "core::option::Option::<core::starknet::contract_address::ContractAddress>"
          },
          {
            "name": "app",
            "type": "core::option::Option::<core::starknet::contract_address::ContractAddress>"
          },
          {
            "name": "text",
            "type": "core::option::Option::<core::felt252>"
          },
          {
            "name": "timestamp",
            "type": "core::option::Option::<core::integer::u64>"
          },
          {
            "name": "action",
            "type": "core::option::Option::<core::felt252>"
          }
        ]
      },
      {
        "type": "enum",
        "name": "core::bool",
        "variants": [
          {
            "name": "False",
            "type": "()"
          },
          {
            "name": "True",
            "type": "()"
          }
        ]
      },
      {
        "type": "enum",
        "name": "pixelaw::core::models::pixel::PixelUpdateResult",
        "variants": [
          {
            "name": "Ok",
            "type": "pixelaw::core::models::pixel::PixelUpdate"
          },
          {
            "name": "NotAllowed",
            "type": "()"
          },
          {
            "name": "Error",
            "type": "core::felt252"
          }
        ]
      },
      {
        "type": "struct",
        "name": "core::array::Span::<core::felt252>",
        "members": [
          {
            "name": "snapshot",
            "type": "@core::array::Array::<core::felt252>"
          }
        ]
      },
      {
        "type": "struct",
        "name": "pixelaw::core::models::registry::App",
        "members": [
          {
            "name": "system",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "name",
            "type": "core::felt252"
          },
          {
            "name": "icon",
            "type": "core::felt252"
          },
          {
            "name": "action",
            "type": "core::felt252"
          }
        ]
      },
      {
        "type": "struct",
        "name": "pixelaw::core::utils::Position",
        "members": [
          {
            "name": "x",
            "type": "core::integer::u16"
          },
          {
            "name": "y",
            "type": "core::integer::u16"
          }
        ]
      },
      {
        "type": "struct",
        "name": "pixelaw::core::utils::Bounds",
        "members": [
          {
            "name": "x_min",
            "type": "core::integer::u16"
          },
          {
            "name": "y_min",
            "type": "core::integer::u16"
          },
          {
            "name": "x_max",
            "type": "core::integer::u16"
          },
          {
            "name": "y_max",
            "type": "core::integer::u16"
          }
        ]
      },
      {
        "type": "struct",
        "name": "pixelaw::core::models::area::Area",
        "members": [
          {
            "name": "id",
            "type": "core::integer::u64"
          },
          {
            "name": "app",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "owner",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "color",
            "type": "core::integer::u32"
          }
        ]
      },
      {
        "type": "enum",
        "name": "core::option::Option::<pixelaw::core::models::area::Area>",
        "variants": [
          {
            "name": "Some",
            "type": "pixelaw::core::models::area::Area"
          },
          {
            "name": "None",
            "type": "()"
          }
        ]
      },
      {
        "type": "struct",
        "name": "core::array::Span::<pixelaw::core::models::area::Area>",
        "members": [
          {
            "name": "snapshot",
            "type": "@core::array::Array::<pixelaw::core::models::area::Area>"
          }
        ]
      },
      {
        "type": "interface",
        "name": "pixelaw::core::actions::IActions",
        "items": [
          {
            "type": "function",
            "name": "init",
            "inputs": [],
            "outputs": [],
            "state_mutability": "external"
          },
          {
            "type": "function",
            "name": "can_update_pixel",
            "inputs": [
              {
                "name": "for_player",
                "type": "core::starknet::contract_address::ContractAddress"
              },
              {
                "name": "for_system",
                "type": "core::starknet::contract_address::ContractAddress"
              },
              {
                "name": "pixel",
                "type": "pixelaw::core::models::pixel::Pixel"
              },
              {
                "name": "pixel_update",
                "type": "pixelaw::core::models::pixel::PixelUpdate"
              },
              {
                "name": "area_id_hint",
                "type": "core::option::Option::<core::integer::u64>"
              },
              {
                "name": "allow_modify",
                "type": "core::bool"
              }
            ],
            "outputs": [
              {
                "type": "pixelaw::core::models::pixel::PixelUpdateResult"
              }
            ],
            "state_mutability": "external"
          },
          {
            "type": "function",
            "name": "update_pixel",
            "inputs": [
              {
                "name": "for_player",
                "type": "core::starknet::contract_address::ContractAddress"
              },
              {
                "name": "for_system",
                "type": "core::starknet::contract_address::ContractAddress"
              },
              {
                "name": "pixel_update",
                "type": "pixelaw::core::models::pixel::PixelUpdate"
              },
              {
                "name": "area_id",
                "type": "core::option::Option::<core::integer::u64>"
              },
              {
                "name": "allow_modify",
                "type": "core::bool"
              }
            ],
            "outputs": [
              {
                "type": "pixelaw::core::models::pixel::PixelUpdateResult"
              }
            ],
            "state_mutability": "external"
          },
          {
            "type": "function",
            "name": "process_queue",
            "inputs": [
              {
                "name": "id",
                "type": "core::felt252"
              },
              {
                "name": "timestamp",
                "type": "core::integer::u64"
              },
              {
                "name": "called_system",
                "type": "core::starknet::contract_address::ContractAddress"
              },
              {
                "name": "selector",
                "type": "core::felt252"
              },
              {
                "name": "calldata",
                "type": "core::array::Span::<core::felt252>"
              }
            ],
            "outputs": [],
            "state_mutability": "external"
          },
          {
            "type": "function",
            "name": "schedule_queue",
            "inputs": [
              {
                "name": "timestamp",
                "type": "core::integer::u64"
              },
              {
                "name": "called_system",
                "type": "core::starknet::contract_address::ContractAddress"
              },
              {
                "name": "selector",
                "type": "core::felt252"
              },
              {
                "name": "calldata",
                "type": "core::array::Span::<core::felt252>"
              }
            ],
            "outputs": [],
            "state_mutability": "external"
          },
          {
            "type": "function",
            "name": "new_app",
            "inputs": [
              {
                "name": "system",
                "type": "core::starknet::contract_address::ContractAddress"
              },
              {
                "name": "name",
                "type": "core::felt252"
              },
              {
                "name": "icon",
                "type": "core::felt252"
              }
            ],
            "outputs": [
              {
                "type": "pixelaw::core::models::registry::App"
              }
            ],
            "state_mutability": "external"
          },
          {
            "type": "function",
            "name": "alert_player",
            "inputs": [
              {
                "name": "position",
                "type": "pixelaw::core::utils::Position"
              },
              {
                "name": "player",
                "type": "core::starknet::contract_address::ContractAddress"
              },
              {
                "name": "message",
                "type": "core::felt252"
              }
            ],
            "outputs": [],
            "state_mutability": "external"
          },
          {
            "type": "function",
            "name": "add_area",
            "inputs": [
              {
                "name": "bounds",
                "type": "pixelaw::core::utils::Bounds"
              },
              {
                "name": "owner",
                "type": "core::starknet::contract_address::ContractAddress"
              },
              {
                "name": "color",
                "type": "core::integer::u32"
              },
              {
                "name": "app",
                "type": "core::starknet::contract_address::ContractAddress"
              }
            ],
            "outputs": [
              {
                "type": "pixelaw::core::models::area::Area"
              }
            ],
            "state_mutability": "external"
          },
          {
            "type": "function",
            "name": "remove_area",
            "inputs": [
              {
                "name": "area_id",
                "type": "core::integer::u64"
              }
            ],
            "outputs": [],
            "state_mutability": "external"
          },
          {
            "type": "function",
            "name": "find_area_by_position",
            "inputs": [
              {
                "name": "position",
                "type": "pixelaw::core::utils::Position"
              }
            ],
            "outputs": [
              {
                "type": "core::option::Option::<pixelaw::core::models::area::Area>"
              }
            ],
            "state_mutability": "external"
          },
          {
            "type": "function",
            "name": "find_areas_inside_bounds",
            "inputs": [
              {
                "name": "bounds",
                "type": "pixelaw::core::utils::Bounds"
              }
            ],
            "outputs": [
              {
                "type": "core::array::Span::<pixelaw::core::models::area::Area>"
              }
            ],
            "state_mutability": "external"
          }
        ]
      },
      {
        "type": "function",
        "name": "dojo_init",
        "inputs": [],
        "outputs": [],
        "state_mutability": "view"
      },
      {
        "type": "impl",
        "name": "WorldProviderImpl",
        "interface_name": "dojo::contract::components::world_provider::IWorldProvider"
      },
      {
        "type": "struct",
        "name": "dojo::world::iworld::IWorldDispatcher",
        "members": [
          {
            "name": "contract_address",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ]
      },
      {
        "type": "interface",
        "name": "dojo::contract::components::world_provider::IWorldProvider",
        "items": [
          {
            "type": "function",
            "name": "world_dispatcher",
            "inputs": [],
            "outputs": [
              {
                "type": "dojo::world::iworld::IWorldDispatcher"
              }
            ],
            "state_mutability": "view"
          }
        ]
      },
      {
        "type": "impl",
        "name": "UpgradeableImpl",
        "interface_name": "dojo::contract::components::upgradeable::IUpgradeable"
      },
      {
        "type": "interface",
        "name": "dojo::contract::components::upgradeable::IUpgradeable",
        "items": [
          {
            "type": "function",
            "name": "upgrade",
            "inputs": [
              {
                "name": "new_class_hash",
                "type": "core::starknet::class_hash::ClassHash"
              }
            ],
            "outputs": [],
            "state_mutability": "external"
          }
        ]
      },
      {
        "type": "constructor",
        "name": "constructor",
        "inputs": []
      },
      {
        "type": "event",
        "name": "dojo::contract::components::upgradeable::upgradeable_cpt::Upgraded",
        "kind": "struct",
        "members": [
          {
            "name": "class_hash",
            "type": "core::starknet::class_hash::ClassHash",
            "kind": "data"
          }
        ]
      },
      {
        "type": "event",
        "name": "dojo::contract::components::upgradeable::upgradeable_cpt::Event",
        "kind": "enum",
        "variants": [
          {
            "name": "Upgraded",
            "type": "dojo::contract::components::upgradeable::upgradeable_cpt::Upgraded",
            "kind": "nested"
          }
        ]
      },
      {
        "type": "event",
        "name": "dojo::contract::components::world_provider::world_provider_cpt::Event",
        "kind": "enum",
        "variants": []
      },
      {
        "type": "event",
        "name": "pixelaw::core::actions::actions::Event",
        "kind": "enum",
        "variants": [
          {
            "name": "UpgradeableEvent",
            "type": "dojo::contract::components::upgradeable::upgradeable_cpt::Event",
            "kind": "nested"
          },
          {
            "name": "WorldProviderEvent",
            "type": "dojo::contract::components::world_provider::world_provider_cpt::Event",
            "kind": "nested"
          }
        ]
      }
    ],
    "init_calldata": [],
    "tag": "p_war-actions",
    "selector": "0x5c4dfad1ce85f4c83221306fbcb419ee67523cc89465f028a2a6f3f90a6f0b8",
    "systems": [
      "init",
      "can_update_pixel",
      "update_pixel",
      "process_queue",
      "schedule_queue",
      "new_app",
      "alert_player",
      "add_area",
      "remove_area",
      "find_area_by_position",
      "find_areas_inside_bounds",
      "upgrade"
    ]
  },
  {
    "address": "0x5690b9d49b93542faa53db1ad2a9631b0ea175abb1297b6da5db60a0a94e35a",
    "class_hash": "0x5b364e36eb86d1aa7e3b5f4d0f8471091cc6f4239d3ec71d30cd4972ecda74b",
    "abi": [
      {
        "type": "impl",
        "name": "allowed_app_actions__ContractImpl",
        "interface_name": "dojo::contract::interface::IContract"
      },
      {
        "type": "interface",
        "name": "dojo::contract::interface::IContract",
        "items": []
      },
      {
        "type": "impl",
        "name": "allowed_app_actions__DeployedContractImpl",
        "interface_name": "dojo::meta::interface::IDeployedResource"
      },
      {
        "type": "struct",
        "name": "core::byte_array::ByteArray",
        "members": [
          {
            "name": "data",
            "type": "core::array::Array::<core::bytes_31::bytes31>"
          },
          {
            "name": "pending_word",
            "type": "core::felt252"
          },
          {
            "name": "pending_word_len",
            "type": "core::integer::u32"
          }
        ]
      },
      {
        "type": "interface",
        "name": "dojo::meta::interface::IDeployedResource",
        "items": [
          {
            "type": "function",
            "name": "dojo_name",
            "inputs": [],
            "outputs": [
              {
                "type": "core::byte_array::ByteArray"
              }
            ],
            "state_mutability": "view"
          }
        ]
      },
      {
        "type": "impl",
        "name": "AllowedAppImpl",
        "interface_name": "p_war::systems::app::IAllowedApp"
      },
      {
        "type": "enum",
        "name": "core::option::Option::<core::starknet::contract_address::ContractAddress>",
        "variants": [
          {
            "name": "Some",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "None",
            "type": "()"
          }
        ]
      },
      {
        "type": "enum",
        "name": "core::option::Option::<core::integer::u64>",
        "variants": [
          {
            "name": "Some",
            "type": "core::integer::u64"
          },
          {
            "name": "None",
            "type": "()"
          }
        ]
      },
      {
        "type": "struct",
        "name": "pixelaw::core::utils::Position",
        "members": [
          {
            "name": "x",
            "type": "core::integer::u16"
          },
          {
            "name": "y",
            "type": "core::integer::u16"
          }
        ]
      },
      {
        "type": "struct",
        "name": "pixelaw::core::utils::DefaultParameters",
        "members": [
          {
            "name": "player_override",
            "type": "core::option::Option::<core::starknet::contract_address::ContractAddress>"
          },
          {
            "name": "system_override",
            "type": "core::option::Option::<core::starknet::contract_address::ContractAddress>"
          },
          {
            "name": "area_hint",
            "type": "core::option::Option::<core::integer::u64>"
          },
          {
            "name": "position",
            "type": "pixelaw::core::utils::Position"
          },
          {
            "name": "color",
            "type": "core::integer::u32"
          }
        ]
      },
      {
        "type": "interface",
        "name": "p_war::systems::app::IAllowedApp",
        "items": [
          {
            "type": "function",
            "name": "set_pixel",
            "inputs": [
              {
                "name": "default_params",
                "type": "pixelaw::core::utils::DefaultParameters"
              }
            ],
            "outputs": [],
            "state_mutability": "external"
          }
        ]
      },
      {
        "type": "function",
        "name": "dojo_init",
        "inputs": [],
        "outputs": [],
        "state_mutability": "view"
      },
      {
        "type": "impl",
        "name": "WorldProviderImpl",
        "interface_name": "dojo::contract::components::world_provider::IWorldProvider"
      },
      {
        "type": "struct",
        "name": "dojo::world::iworld::IWorldDispatcher",
        "members": [
          {
            "name": "contract_address",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ]
      },
      {
        "type": "interface",
        "name": "dojo::contract::components::world_provider::IWorldProvider",
        "items": [
          {
            "type": "function",
            "name": "world_dispatcher",
            "inputs": [],
            "outputs": [
              {
                "type": "dojo::world::iworld::IWorldDispatcher"
              }
            ],
            "state_mutability": "view"
          }
        ]
      },
      {
        "type": "impl",
        "name": "UpgradeableImpl",
        "interface_name": "dojo::contract::components::upgradeable::IUpgradeable"
      },
      {
        "type": "interface",
        "name": "dojo::contract::components::upgradeable::IUpgradeable",
        "items": [
          {
            "type": "function",
            "name": "upgrade",
            "inputs": [
              {
                "name": "new_class_hash",
                "type": "core::starknet::class_hash::ClassHash"
              }
            ],
            "outputs": [],
            "state_mutability": "external"
          }
        ]
      },
      {
        "type": "constructor",
        "name": "constructor",
        "inputs": []
      },
      {
        "type": "event",
        "name": "dojo::contract::components::upgradeable::upgradeable_cpt::Upgraded",
        "kind": "struct",
        "members": [
          {
            "name": "class_hash",
            "type": "core::starknet::class_hash::ClassHash",
            "kind": "data"
          }
        ]
      },
      {
        "type": "event",
        "name": "dojo::contract::components::upgradeable::upgradeable_cpt::Event",
        "kind": "enum",
        "variants": [
          {
            "name": "Upgraded",
            "type": "dojo::contract::components::upgradeable::upgradeable_cpt::Upgraded",
            "kind": "nested"
          }
        ]
      },
      {
        "type": "event",
        "name": "dojo::contract::components::world_provider::world_provider_cpt::Event",
        "kind": "enum",
        "variants": []
      },
      {
        "type": "event",
        "name": "p_war::systems::app::allowed_app_actions::Event",
        "kind": "enum",
        "variants": [
          {
            "name": "UpgradeableEvent",
            "type": "dojo::contract::components::upgradeable::upgradeable_cpt::Event",
            "kind": "nested"
          },
          {
            "name": "WorldProviderEvent",
            "type": "dojo::contract::components::world_provider::world_provider_cpt::Event",
            "kind": "nested"
          }
        ]
      }
    ],
    "init_calldata": [],
    "tag": "p_war-allowed_app_actions",
    "selector": "0x78f047e7dd7b9623dc8867dc03af4d60eb5d2a11b2c41afabeea4e6d0ec0c8c",
    "systems": [
      "set_pixel",
      "upgrade"
    ]
  },
  {
    "address": "0x48d49c8e764afef53c591f812fdbafdb00177d065c858ee07ac4bcc6d01b216",
    "class_hash": "0x4ffd8f0827a911b9a975bd864b9c772e1c653914ab0cbd450c4a691d68bedc8",
    "abi": [
      {
        "type": "impl",
        "name": "guild_actions__ContractImpl",
        "interface_name": "dojo::contract::interface::IContract"
      },
      {
        "type": "interface",
        "name": "dojo::contract::interface::IContract",
        "items": []
      },
      {
        "type": "impl",
        "name": "guild_actions__DeployedContractImpl",
        "interface_name": "dojo::meta::interface::IDeployedResource"
      },
      {
        "type": "struct",
        "name": "core::byte_array::ByteArray",
        "members": [
          {
            "name": "data",
            "type": "core::array::Array::<core::bytes_31::bytes31>"
          },
          {
            "name": "pending_word",
            "type": "core::felt252"
          },
          {
            "name": "pending_word_len",
            "type": "core::integer::u32"
          }
        ]
      },
      {
        "type": "interface",
        "name": "dojo::meta::interface::IDeployedResource",
        "items": [
          {
            "type": "function",
            "name": "dojo_name",
            "inputs": [],
            "outputs": [
              {
                "type": "core::byte_array::ByteArray"
              }
            ],
            "state_mutability": "view"
          }
        ]
      },
      {
        "type": "impl",
        "name": "GuildImpl",
        "interface_name": "p_war::systems::guilds::IGuild"
      },
      {
        "type": "enum",
        "name": "core::bool",
        "variants": [
          {
            "name": "False",
            "type": "()"
          },
          {
            "name": "True",
            "type": "()"
          }
        ]
      },
      {
        "type": "interface",
        "name": "p_war::systems::guilds::IGuild",
        "items": [
          {
            "type": "function",
            "name": "create_guild",
            "inputs": [
              {
                "name": "game_id",
                "type": "core::integer::u32"
              },
              {
                "name": "guild_name",
                "type": "core::felt252"
              }
            ],
            "outputs": [
              {
                "type": "core::integer::u32"
              }
            ],
            "state_mutability": "external"
          },
          {
            "type": "function",
            "name": "add_member",
            "inputs": [
              {
                "name": "game_id",
                "type": "core::integer::u32"
              },
              {
                "name": "guild_id",
                "type": "core::integer::u32"
              },
              {
                "name": "new_member",
                "type": "core::starknet::contract_address::ContractAddress"
              }
            ],
            "outputs": [],
            "state_mutability": "external"
          },
          {
            "type": "function",
            "name": "join_guild",
            "inputs": [
              {
                "name": "game_id",
                "type": "core::integer::u32"
              },
              {
                "name": "guild_id",
                "type": "core::integer::u32"
              }
            ],
            "outputs": [],
            "state_mutability": "external"
          },
          {
            "type": "function",
            "name": "remove_member",
            "inputs": [
              {
                "name": "game_id",
                "type": "core::integer::u32"
              },
              {
                "name": "guild_id",
                "type": "core::integer::u32"
              },
              {
                "name": "member",
                "type": "core::starknet::contract_address::ContractAddress"
              }
            ],
            "outputs": [],
            "state_mutability": "external"
          },
          {
            "type": "function",
            "name": "is_member",
            "inputs": [
              {
                "name": "game_id",
                "type": "core::integer::u32"
              },
              {
                "name": "guild_id",
                "type": "core::integer::u32"
              },
              {
                "name": "member",
                "type": "core::starknet::contract_address::ContractAddress"
              }
            ],
            "outputs": [
              {
                "type": "core::bool"
              }
            ],
            "state_mutability": "external"
          },
          {
            "type": "function",
            "name": "get_guild_contract_address",
            "inputs": [],
            "outputs": [
              {
                "type": "core::starknet::contract_address::ContractAddress"
              }
            ],
            "state_mutability": "external"
          },
          {
            "type": "function",
            "name": "get_guild_points",
            "inputs": [
              {
                "name": "game_id",
                "type": "core::integer::u32"
              },
              {
                "name": "guild_id",
                "type": "core::integer::u32"
              }
            ],
            "outputs": [
              {
                "type": "core::integer::u32"
              }
            ],
            "state_mutability": "external"
          }
        ]
      },
      {
        "type": "function",
        "name": "dojo_init",
        "inputs": [],
        "outputs": [],
        "state_mutability": "view"
      },
      {
        "type": "impl",
        "name": "WorldProviderImpl",
        "interface_name": "dojo::contract::components::world_provider::IWorldProvider"
      },
      {
        "type": "struct",
        "name": "dojo::world::iworld::IWorldDispatcher",
        "members": [
          {
            "name": "contract_address",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ]
      },
      {
        "type": "interface",
        "name": "dojo::contract::components::world_provider::IWorldProvider",
        "items": [
          {
            "type": "function",
            "name": "world_dispatcher",
            "inputs": [],
            "outputs": [
              {
                "type": "dojo::world::iworld::IWorldDispatcher"
              }
            ],
            "state_mutability": "view"
          }
        ]
      },
      {
        "type": "impl",
        "name": "UpgradeableImpl",
        "interface_name": "dojo::contract::components::upgradeable::IUpgradeable"
      },
      {
        "type": "interface",
        "name": "dojo::contract::components::upgradeable::IUpgradeable",
        "items": [
          {
            "type": "function",
            "name": "upgrade",
            "inputs": [
              {
                "name": "new_class_hash",
                "type": "core::starknet::class_hash::ClassHash"
              }
            ],
            "outputs": [],
            "state_mutability": "external"
          }
        ]
      },
      {
        "type": "constructor",
        "name": "constructor",
        "inputs": []
      },
      {
        "type": "event",
        "name": "dojo::contract::components::upgradeable::upgradeable_cpt::Upgraded",
        "kind": "struct",
        "members": [
          {
            "name": "class_hash",
            "type": "core::starknet::class_hash::ClassHash",
            "kind": "data"
          }
        ]
      },
      {
        "type": "event",
        "name": "dojo::contract::components::upgradeable::upgradeable_cpt::Event",
        "kind": "enum",
        "variants": [
          {
            "name": "Upgraded",
            "type": "dojo::contract::components::upgradeable::upgradeable_cpt::Upgraded",
            "kind": "nested"
          }
        ]
      },
      {
        "type": "event",
        "name": "dojo::contract::components::world_provider::world_provider_cpt::Event",
        "kind": "enum",
        "variants": []
      },
      {
        "type": "event",
        "name": "p_war::systems::guilds::guild_actions::Event",
        "kind": "enum",
        "variants": [
          {
            "name": "UpgradeableEvent",
            "type": "dojo::contract::components::upgradeable::upgradeable_cpt::Event",
            "kind": "nested"
          },
          {
            "name": "WorldProviderEvent",
            "type": "dojo::contract::components::world_provider::world_provider_cpt::Event",
            "kind": "nested"
          }
        ]
      }
    ],
    "init_calldata": [],
    "tag": "p_war-guild_actions",
    "selector": "0x5a9bda3f6e0c2434004cf6dab0745c5d894da70cf53eca4bd847b21b3c94276",
    "systems": [
      "create_guild",
      "add_member",
      "join_guild",
      "remove_member",
      "is_member",
      "get_guild_contract_address",
      "get_guild_points",
      "upgrade"
    ]
  },
  {
    "address": "0x2f3dad854016a24174a0cfdd3f5c72c1ef5b0320d28eba044e73467c53f385a",
    "class_hash": "0x275e60b827e5b5866b27e0037edca0b3bb091690939a3646d460eaaa9e8a1ea",
    "abi": [
      {
        "type": "impl",
        "name": "p_war_actions__ContractImpl",
        "interface_name": "dojo::contract::interface::IContract"
      },
      {
        "type": "interface",
        "name": "dojo::contract::interface::IContract",
        "items": []
      },
      {
        "type": "impl",
        "name": "p_war_actions__DeployedContractImpl",
        "interface_name": "dojo::meta::interface::IDeployedResource"
      },
      {
        "type": "struct",
        "name": "core::byte_array::ByteArray",
        "members": [
          {
            "name": "data",
            "type": "core::array::Array::<core::bytes_31::bytes31>"
          },
          {
            "name": "pending_word",
            "type": "core::felt252"
          },
          {
            "name": "pending_word_len",
            "type": "core::integer::u32"
          }
        ]
      },
      {
        "type": "interface",
        "name": "dojo::meta::interface::IDeployedResource",
        "items": [
          {
            "type": "function",
            "name": "dojo_name",
            "inputs": [],
            "outputs": [
              {
                "type": "core::byte_array::ByteArray"
              }
            ],
            "state_mutability": "view"
          }
        ]
      },
      {
        "type": "impl",
        "name": "ActionsImpl",
        "interface_name": "p_war::systems::actions::IActions"
      },
      {
        "type": "enum",
        "name": "core::option::Option::<core::starknet::contract_address::ContractAddress>",
        "variants": [
          {
            "name": "Some",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "None",
            "type": "()"
          }
        ]
      },
      {
        "type": "enum",
        "name": "core::option::Option::<core::integer::u64>",
        "variants": [
          {
            "name": "Some",
            "type": "core::integer::u64"
          },
          {
            "name": "None",
            "type": "()"
          }
        ]
      },
      {
        "type": "struct",
        "name": "pixelaw::core::utils::Position",
        "members": [
          {
            "name": "x",
            "type": "core::integer::u16"
          },
          {
            "name": "y",
            "type": "core::integer::u16"
          }
        ]
      },
      {
        "type": "struct",
        "name": "pixelaw::core::utils::DefaultParameters",
        "members": [
          {
            "name": "player_override",
            "type": "core::option::Option::<core::starknet::contract_address::ContractAddress>"
          },
          {
            "name": "system_override",
            "type": "core::option::Option::<core::starknet::contract_address::ContractAddress>"
          },
          {
            "name": "area_hint",
            "type": "core::option::Option::<core::integer::u64>"
          },
          {
            "name": "position",
            "type": "pixelaw::core::utils::Position"
          },
          {
            "name": "color",
            "type": "core::integer::u32"
          }
        ]
      },
      {
        "type": "struct",
        "name": "p_war::systems::guilds::IGuildDispatcher",
        "members": [
          {
            "name": "contract_address",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ]
      },
      {
        "type": "enum",
        "name": "core::option::Option::<core::integer::u32>",
        "variants": [
          {
            "name": "Some",
            "type": "core::integer::u32"
          },
          {
            "name": "None",
            "type": "()"
          }
        ]
      },
      {
        "type": "enum",
        "name": "core::option::Option::<core::felt252>",
        "variants": [
          {
            "name": "Some",
            "type": "core::felt252"
          },
          {
            "name": "None",
            "type": "()"
          }
        ]
      },
      {
        "type": "struct",
        "name": "pixelaw::core::models::pixel::PixelUpdate",
        "members": [
          {
            "name": "x",
            "type": "core::integer::u16"
          },
          {
            "name": "y",
            "type": "core::integer::u16"
          },
          {
            "name": "color",
            "type": "core::option::Option::<core::integer::u32>"
          },
          {
            "name": "owner",
            "type": "core::option::Option::<core::starknet::contract_address::ContractAddress>"
          },
          {
            "name": "app",
            "type": "core::option::Option::<core::starknet::contract_address::ContractAddress>"
          },
          {
            "name": "text",
            "type": "core::option::Option::<core::felt252>"
          },
          {
            "name": "timestamp",
            "type": "core::option::Option::<core::integer::u64>"
          },
          {
            "name": "action",
            "type": "core::option::Option::<core::felt252>"
          }
        ]
      },
      {
        "type": "interface",
        "name": "p_war::systems::actions::IActions",
        "items": [
          {
            "type": "function",
            "name": "init",
            "inputs": [],
            "outputs": [],
            "state_mutability": "external"
          },
          {
            "type": "function",
            "name": "interact",
            "inputs": [
              {
                "name": "default_params",
                "type": "pixelaw::core::utils::DefaultParameters"
              }
            ],
            "outputs": [],
            "state_mutability": "external"
          },
          {
            "type": "function",
            "name": "create_game",
            "inputs": [
              {
                "name": "origin",
                "type": "pixelaw::core::utils::Position"
              }
            ],
            "outputs": [
              {
                "type": "core::integer::u32"
              }
            ],
            "state_mutability": "external"
          },
          {
            "type": "function",
            "name": "create_game_guilds",
            "inputs": [
              {
                "name": "game_id",
                "type": "core::integer::u32"
              },
              {
                "name": "guild_dispatcher",
                "type": "p_war::systems::guilds::IGuildDispatcher"
              }
            ],
            "outputs": [
              {
                "type": "core::array::Array::<core::integer::u32>"
              }
            ],
            "state_mutability": "external"
          },
          {
            "type": "function",
            "name": "get_game_id",
            "inputs": [
              {
                "name": "position",
                "type": "pixelaw::core::utils::Position"
              }
            ],
            "outputs": [
              {
                "type": "core::integer::u32"
              }
            ],
            "state_mutability": "view"
          },
          {
            "type": "function",
            "name": "place_pixel",
            "inputs": [
              {
                "name": "app",
                "type": "core::starknet::contract_address::ContractAddress"
              },
              {
                "name": "default_params",
                "type": "pixelaw::core::utils::DefaultParameters"
              }
            ],
            "outputs": [],
            "state_mutability": "external"
          },
          {
            "type": "function",
            "name": "update_pixel",
            "inputs": [
              {
                "name": "pixel_update",
                "type": "pixelaw::core::models::pixel::PixelUpdate"
              }
            ],
            "outputs": [],
            "state_mutability": "external"
          },
          {
            "type": "function",
            "name": "end_game",
            "inputs": [
              {
                "name": "game_id",
                "type": "core::integer::u32"
              }
            ],
            "outputs": [],
            "state_mutability": "external"
          }
        ]
      },
      {
        "type": "function",
        "name": "dojo_init",
        "inputs": [],
        "outputs": [],
        "state_mutability": "view"
      },
      {
        "type": "impl",
        "name": "WorldProviderImpl",
        "interface_name": "dojo::contract::components::world_provider::IWorldProvider"
      },
      {
        "type": "struct",
        "name": "dojo::world::iworld::IWorldDispatcher",
        "members": [
          {
            "name": "contract_address",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ]
      },
      {
        "type": "interface",
        "name": "dojo::contract::components::world_provider::IWorldProvider",
        "items": [
          {
            "type": "function",
            "name": "world_dispatcher",
            "inputs": [],
            "outputs": [
              {
                "type": "dojo::world::iworld::IWorldDispatcher"
              }
            ],
            "state_mutability": "view"
          }
        ]
      },
      {
        "type": "impl",
        "name": "UpgradeableImpl",
        "interface_name": "dojo::contract::components::upgradeable::IUpgradeable"
      },
      {
        "type": "interface",
        "name": "dojo::contract::components::upgradeable::IUpgradeable",
        "items": [
          {
            "type": "function",
            "name": "upgrade",
            "inputs": [
              {
                "name": "new_class_hash",
                "type": "core::starknet::class_hash::ClassHash"
              }
            ],
            "outputs": [],
            "state_mutability": "external"
          }
        ]
      },
      {
        "type": "constructor",
        "name": "constructor",
        "inputs": []
      },
      {
        "type": "event",
        "name": "dojo::contract::components::upgradeable::upgradeable_cpt::Upgraded",
        "kind": "struct",
        "members": [
          {
            "name": "class_hash",
            "type": "core::starknet::class_hash::ClassHash",
            "kind": "data"
          }
        ]
      },
      {
        "type": "event",
        "name": "dojo::contract::components::upgradeable::upgradeable_cpt::Event",
        "kind": "enum",
        "variants": [
          {
            "name": "Upgraded",
            "type": "dojo::contract::components::upgradeable::upgradeable_cpt::Upgraded",
            "kind": "nested"
          }
        ]
      },
      {
        "type": "event",
        "name": "dojo::contract::components::world_provider::world_provider_cpt::Event",
        "kind": "enum",
        "variants": []
      },
      {
        "type": "event",
        "name": "p_war::systems::actions::p_war_actions::Event",
        "kind": "enum",
        "variants": [
          {
            "name": "UpgradeableEvent",
            "type": "dojo::contract::components::upgradeable::upgradeable_cpt::Event",
            "kind": "nested"
          },
          {
            "name": "WorldProviderEvent",
            "type": "dojo::contract::components::world_provider::world_provider_cpt::Event",
            "kind": "nested"
          }
        ]
      }
    ],
    "init_calldata": [],
    "tag": "p_war-p_war_actions",
    "selector": "0x386fdc6d6ac46f91810daa12b1e916e9abad5027835f35126b3c4950a94ed99",
    "systems": [
      "init",
      "interact",
      "create_game",
      "create_game_guilds",
      "place_pixel",
      "update_pixel",
      "end_game",
      "upgrade"
    ]
  },
  {
    "address": "0x6313aef58aaf53fe10367e1b8dd49fb57c167161692fe317d6af29c17ba3fd1",
    "class_hash": "0x18ec3243e81f7e5f66eb14e6419e386e005500f808bfb9c76f93b2a9375c3a9",
    "abi": [
      {
        "type": "impl",
        "name": "propose_actions__ContractImpl",
        "interface_name": "dojo::contract::interface::IContract"
      },
      {
        "type": "interface",
        "name": "dojo::contract::interface::IContract",
        "items": []
      },
      {
        "type": "impl",
        "name": "propose_actions__DeployedContractImpl",
        "interface_name": "dojo::meta::interface::IDeployedResource"
      },
      {
        "type": "struct",
        "name": "core::byte_array::ByteArray",
        "members": [
          {
            "name": "data",
            "type": "core::array::Array::<core::bytes_31::bytes31>"
          },
          {
            "name": "pending_word",
            "type": "core::felt252"
          },
          {
            "name": "pending_word_len",
            "type": "core::integer::u32"
          }
        ]
      },
      {
        "type": "interface",
        "name": "dojo::meta::interface::IDeployedResource",
        "items": [
          {
            "type": "function",
            "name": "dojo_name",
            "inputs": [],
            "outputs": [
              {
                "type": "core::byte_array::ByteArray"
              }
            ],
            "state_mutability": "view"
          }
        ]
      },
      {
        "type": "impl",
        "name": "ProposeImpl",
        "interface_name": "p_war::systems::propose::IPropose"
      },
      {
        "type": "struct",
        "name": "pixelaw::core::utils::Position",
        "members": [
          {
            "name": "x",
            "type": "core::integer::u16"
          },
          {
            "name": "y",
            "type": "core::integer::u16"
          }
        ]
      },
      {
        "type": "struct",
        "name": "core::array::Span::<pixelaw::core::utils::Position>",
        "members": [
          {
            "name": "snapshot",
            "type": "@core::array::Array::<pixelaw::core::utils::Position>"
          }
        ]
      },
      {
        "type": "struct",
        "name": "core::array::Span::<core::integer::u32>",
        "members": [
          {
            "name": "snapshot",
            "type": "@core::array::Array::<core::integer::u32>"
          }
        ]
      },
      {
        "type": "struct",
        "name": "p_war::models::game::Game",
        "members": [
          {
            "name": "id",
            "type": "core::integer::u32"
          },
          {
            "name": "start",
            "type": "core::integer::u64"
          },
          {
            "name": "end",
            "type": "core::integer::u64"
          },
          {
            "name": "proposal_idx",
            "type": "core::integer::u32"
          },
          {
            "name": "coeff_own_pixels",
            "type": "core::integer::u32"
          },
          {
            "name": "coeff_commits",
            "type": "core::integer::u32"
          },
          {
            "name": "winner_config",
            "type": "core::integer::u32"
          },
          {
            "name": "winner",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "guild_ids",
            "type": "core::array::Span::<core::integer::u32>"
          },
          {
            "name": "guild_count",
            "type": "core::integer::u32"
          }
        ]
      },
      {
        "type": "enum",
        "name": "core::bool",
        "variants": [
          {
            "name": "False",
            "type": "()"
          },
          {
            "name": "True",
            "type": "()"
          }
        ]
      },
      {
        "type": "struct",
        "name": "p_war::models::proposal::Proposal",
        "members": [
          {
            "name": "game_id",
            "type": "core::integer::u32"
          },
          {
            "name": "index",
            "type": "core::integer::u32"
          },
          {
            "name": "author",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "proposal_type",
            "type": "core::integer::u8"
          },
          {
            "name": "target_args_1",
            "type": "core::integer::u32"
          },
          {
            "name": "target_args_2",
            "type": "core::integer::u32"
          },
          {
            "name": "start",
            "type": "core::integer::u64"
          },
          {
            "name": "end",
            "type": "core::integer::u64"
          },
          {
            "name": "yes_voting_power",
            "type": "core::integer::u32"
          },
          {
            "name": "no_voting_power",
            "type": "core::integer::u32"
          },
          {
            "name": "is_activated",
            "type": "core::bool"
          }
        ]
      },
      {
        "type": "interface",
        "name": "p_war::systems::propose::IPropose",
        "items": [
          {
            "type": "function",
            "name": "create_proposal",
            "inputs": [
              {
                "name": "game_id",
                "type": "core::integer::u32"
              },
              {
                "name": "proposal_type",
                "type": "core::integer::u8"
              },
              {
                "name": "target_args_1",
                "type": "core::integer::u32"
              },
              {
                "name": "target_args_2",
                "type": "core::integer::u32"
              }
            ],
            "outputs": [
              {
                "type": "core::integer::u32"
              }
            ],
            "state_mutability": "external"
          },
          {
            "type": "function",
            "name": "activate_proposal",
            "inputs": [
              {
                "name": "game_id",
                "type": "core::integer::u32"
              },
              {
                "name": "index",
                "type": "core::integer::u32"
              },
              {
                "name": "clear_data",
                "type": "core::array::Span::<pixelaw::core::utils::Position>"
              }
            ],
            "outputs": [],
            "state_mutability": "external"
          },
          {
            "type": "function",
            "name": "add_new_color",
            "inputs": [
              {
                "name": "game_id",
                "type": "core::integer::u32"
              },
              {
                "name": "index",
                "type": "core::integer::u32"
              },
              {
                "name": "game",
                "type": "p_war::models::game::Game"
              },
              {
                "name": "proposal",
                "type": "p_war::models::proposal::Proposal"
              }
            ],
            "outputs": [],
            "state_mutability": "external"
          },
          {
            "type": "function",
            "name": "reset_to_white",
            "inputs": [
              {
                "name": "game_id",
                "type": "core::integer::u32"
              },
              {
                "name": "index",
                "type": "core::integer::u32"
              },
              {
                "name": "game",
                "type": "p_war::models::game::Game"
              },
              {
                "name": "proposal",
                "type": "p_war::models::proposal::Proposal"
              },
              {
                "name": "clear_data",
                "type": "core::array::Span::<pixelaw::core::utils::Position>"
              }
            ],
            "outputs": [],
            "state_mutability": "external"
          }
        ]
      },
      {
        "type": "function",
        "name": "dojo_init",
        "inputs": [],
        "outputs": [],
        "state_mutability": "view"
      },
      {
        "type": "impl",
        "name": "WorldProviderImpl",
        "interface_name": "dojo::contract::components::world_provider::IWorldProvider"
      },
      {
        "type": "struct",
        "name": "dojo::world::iworld::IWorldDispatcher",
        "members": [
          {
            "name": "contract_address",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ]
      },
      {
        "type": "interface",
        "name": "dojo::contract::components::world_provider::IWorldProvider",
        "items": [
          {
            "type": "function",
            "name": "world_dispatcher",
            "inputs": [],
            "outputs": [
              {
                "type": "dojo::world::iworld::IWorldDispatcher"
              }
            ],
            "state_mutability": "view"
          }
        ]
      },
      {
        "type": "impl",
        "name": "UpgradeableImpl",
        "interface_name": "dojo::contract::components::upgradeable::IUpgradeable"
      },
      {
        "type": "interface",
        "name": "dojo::contract::components::upgradeable::IUpgradeable",
        "items": [
          {
            "type": "function",
            "name": "upgrade",
            "inputs": [
              {
                "name": "new_class_hash",
                "type": "core::starknet::class_hash::ClassHash"
              }
            ],
            "outputs": [],
            "state_mutability": "external"
          }
        ]
      },
      {
        "type": "constructor",
        "name": "constructor",
        "inputs": []
      },
      {
        "type": "event",
        "name": "dojo::contract::components::upgradeable::upgradeable_cpt::Upgraded",
        "kind": "struct",
        "members": [
          {
            "name": "class_hash",
            "type": "core::starknet::class_hash::ClassHash",
            "kind": "data"
          }
        ]
      },
      {
        "type": "event",
        "name": "dojo::contract::components::upgradeable::upgradeable_cpt::Event",
        "kind": "enum",
        "variants": [
          {
            "name": "Upgraded",
            "type": "dojo::contract::components::upgradeable::upgradeable_cpt::Upgraded",
            "kind": "nested"
          }
        ]
      },
      {
        "type": "event",
        "name": "dojo::contract::components::world_provider::world_provider_cpt::Event",
        "kind": "enum",
        "variants": []
      },
      {
        "type": "event",
        "name": "p_war::systems::propose::propose_actions::Event",
        "kind": "enum",
        "variants": [
          {
            "name": "UpgradeableEvent",
            "type": "dojo::contract::components::upgradeable::upgradeable_cpt::Event",
            "kind": "nested"
          },
          {
            "name": "WorldProviderEvent",
            "type": "dojo::contract::components::world_provider::world_provider_cpt::Event",
            "kind": "nested"
          }
        ]
      }
    ],
    "init_calldata": [],
    "tag": "p_war-propose_actions",
    "selector": "0x5f7a960aa6f278cc9d575d01a7832f32c10a05356e7bfed4a2d70701e561583",
    "systems": [
      "create_proposal",
      "activate_proposal",
      "add_new_color",
      "reset_to_white",
      "upgrade"
    ]
  },
  {
    "address": "0x48b80202712169439d21f954a694827eeb35f33641f1bb04bce607a66cbe89",
    "class_hash": "0x1b824bc299e36f833652d5f28136be1d8baab919158b7f57207ea0f9c6bc33f",
    "abi": [
      {
        "type": "impl",
        "name": "voting_actions__ContractImpl",
        "interface_name": "dojo::contract::interface::IContract"
      },
      {
        "type": "interface",
        "name": "dojo::contract::interface::IContract",
        "items": []
      },
      {
        "type": "impl",
        "name": "voting_actions__DeployedContractImpl",
        "interface_name": "dojo::meta::interface::IDeployedResource"
      },
      {
        "type": "struct",
        "name": "core::byte_array::ByteArray",
        "members": [
          {
            "name": "data",
            "type": "core::array::Array::<core::bytes_31::bytes31>"
          },
          {
            "name": "pending_word",
            "type": "core::felt252"
          },
          {
            "name": "pending_word_len",
            "type": "core::integer::u32"
          }
        ]
      },
      {
        "type": "interface",
        "name": "dojo::meta::interface::IDeployedResource",
        "items": [
          {
            "type": "function",
            "name": "dojo_name",
            "inputs": [],
            "outputs": [
              {
                "type": "core::byte_array::ByteArray"
              }
            ],
            "state_mutability": "view"
          }
        ]
      },
      {
        "type": "impl",
        "name": "VotingImpl",
        "interface_name": "p_war::systems::voting::IVoting"
      },
      {
        "type": "enum",
        "name": "core::bool",
        "variants": [
          {
            "name": "False",
            "type": "()"
          },
          {
            "name": "True",
            "type": "()"
          }
        ]
      },
      {
        "type": "interface",
        "name": "p_war::systems::voting::IVoting",
        "items": [
          {
            "type": "function",
            "name": "vote",
            "inputs": [
              {
                "name": "game_id",
                "type": "core::integer::u32"
              },
              {
                "name": "index",
                "type": "core::integer::u32"
              },
              {
                "name": "use_px",
                "type": "core::integer::u32"
              },
              {
                "name": "is_in_favor",
                "type": "core::bool"
              }
            ],
            "outputs": [],
            "state_mutability": "external"
          }
        ]
      },
      {
        "type": "function",
        "name": "dojo_init",
        "inputs": [],
        "outputs": [],
        "state_mutability": "view"
      },
      {
        "type": "impl",
        "name": "WorldProviderImpl",
        "interface_name": "dojo::contract::components::world_provider::IWorldProvider"
      },
      {
        "type": "struct",
        "name": "dojo::world::iworld::IWorldDispatcher",
        "members": [
          {
            "name": "contract_address",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ]
      },
      {
        "type": "interface",
        "name": "dojo::contract::components::world_provider::IWorldProvider",
        "items": [
          {
            "type": "function",
            "name": "world_dispatcher",
            "inputs": [],
            "outputs": [
              {
                "type": "dojo::world::iworld::IWorldDispatcher"
              }
            ],
            "state_mutability": "view"
          }
        ]
      },
      {
        "type": "impl",
        "name": "UpgradeableImpl",
        "interface_name": "dojo::contract::components::upgradeable::IUpgradeable"
      },
      {
        "type": "interface",
        "name": "dojo::contract::components::upgradeable::IUpgradeable",
        "items": [
          {
            "type": "function",
            "name": "upgrade",
            "inputs": [
              {
                "name": "new_class_hash",
                "type": "core::starknet::class_hash::ClassHash"
              }
            ],
            "outputs": [],
            "state_mutability": "external"
          }
        ]
      },
      {
        "type": "constructor",
        "name": "constructor",
        "inputs": []
      },
      {
        "type": "event",
        "name": "dojo::contract::components::upgradeable::upgradeable_cpt::Upgraded",
        "kind": "struct",
        "members": [
          {
            "name": "class_hash",
            "type": "core::starknet::class_hash::ClassHash",
            "kind": "data"
          }
        ]
      },
      {
        "type": "event",
        "name": "dojo::contract::components::upgradeable::upgradeable_cpt::Event",
        "kind": "enum",
        "variants": [
          {
            "name": "Upgraded",
            "type": "dojo::contract::components::upgradeable::upgradeable_cpt::Upgraded",
            "kind": "nested"
          }
        ]
      },
      {
        "type": "event",
        "name": "dojo::contract::components::world_provider::world_provider_cpt::Event",
        "kind": "enum",
        "variants": []
      },
      {
        "type": "event",
        "name": "p_war::systems::voting::voting_actions::Event",
        "kind": "enum",
        "variants": [
          {
            "name": "UpgradeableEvent",
            "type": "dojo::contract::components::upgradeable::upgradeable_cpt::Event",
            "kind": "nested"
          },
          {
            "name": "WorldProviderEvent",
            "type": "dojo::contract::components::world_provider::world_provider_cpt::Event",
            "kind": "nested"
          }
        ]
      }
    ],
    "init_calldata": [],
    "tag": "p_war-voting_actions",
    "selector": "0x346d11d3e74683676b1ea1f5b985192ac36ed677b0b01bc8c5cc975eb920460",
    "systems": [
      "vote",
      "upgrade"
    ]
  }
];

const AppContent = React.memo(() => {
  const { coreStatus, pixelawCore } = usePixelawProvider();

  const contextValue = React.useMemo(() => {
    if (
      !pixelawCore ||
      (coreStatus !== "ready" && coreStatus !== "readyWithoutWallet")
    )
      return null;

    const wallet = pixelawCore.wallet as DojoWallet;
    const provider = pixelawCore.engine["dojoSetup"].provider;
    const manifest = pixelawCore.engine["dojoSetup"].manifest;
    //merge base manifest with pwarmanifest
    // const output = manifest.contracts.concat(pwarManifest);
    const mergedContracts = [...manifest.contracts, ...pwarManifest];
    pixelawCore.engine["dojoSetup"].manifest.contracts = mergedContracts;
    const world = setupWorld(provider);
    console.log("manifest contracts: ", manifest.contracts);
    console.log("wallet:", wallet);
    console.log("Provider:", provider);
    console.log("World:", world);
    console.log("merged contracts", mergedContracts);

    return { wallet, provider, world };
  }, [pixelawCore, coreStatus]);

  if (coreStatus === "error") {
    return <div className="error-message">Error occurred, check the logs</div>;
  }
  if (coreStatus === "initAccount") {
    console.log("init account happened");
    return (
      <BrowserRouter>
        <StarknetChainProvider>
          <div className="loading-message">
            Pls wait 🧘 : Initializing account
          </div>
        </StarknetChainProvider>
      </BrowserRouter>
    );
  }
  if (
    (coreStatus === "ready" || coreStatus === "readyWithoutWallet") &&
    contextValue
  ) {
    return (
      <BrowserRouter>
        <StarknetChainProvider>
          <PwarContext.Provider value={contextValue}>
            {" "}
            <Main />
          </PwarContext.Provider>
        </StarknetChainProvider>
      </BrowserRouter>
    );
  }

  return <div className="loading-message">Pls wait 🧘 : Loading</div>;
});

const App = () => {
  return (
    <PixelawProvider
      worldsRegistry={worldsRegistry as WorldsRegistry}
      world={world}
      engines={engines}
      coreDefaults={coreDefaults}
    >
      <AppContent />
    </PixelawProvider>
  );
};

const { protocol, hostname } = window.location;
const baseUrl = `${protocol}//${hostname}`;

const world = getWorldForUrl(
  worldsRegistry as WorldsRegistry,
  baseUrl,
  "local",
);

const rootElement = document.getElementById("root");

const engines = { dojo: DojoEngine, mud: MudEngine };

const coreDefaults = getCoreDefaultsFromUrl();

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  console.error("Failed to find the root element");
}
