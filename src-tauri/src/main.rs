#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use audiotags::{Tag, TagType};

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![read_song_metadata])
    .run(tauri::generate_context!())
    .expect("error while running melody");
}

#[tauri::command]
fn read_song_metadata(file_path: &str) -> String {
  let mut tags = Tag::new().read_from_path(file_path).unwrap();

  // let mut a

  // if let Some(artist) = tags.artist() {
  //     println!("artist: {}", artist);
  // }
  // if let Some(title) = tags.title() {
  //     println!("title: {}", title);
  // }
  // if let Some(album) = tags.album_title() {
  //     println!("album: {:?}", album);
  // }
  // let artist_name = tags.artist();
  let mut song_name:&str = "";
  match tags.title() {
    Some(title) => song_name = title,
    None => println!("No artist set")
  }

  // song_name
  // &String::from(&song_name)
  // String::from(*song_name.to_string())
  // return &song_name  

  // return String::from(*song_name)
  song_name.into()

  // println!("{}", artist_name.unwrap());
  // Return title
}

