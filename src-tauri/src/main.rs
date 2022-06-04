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
fn read_song_metadata(file_path: &str) -> (String, String) {
  let mut tags = Tag::new().read_from_path(file_path).unwrap();

  let mut song_name:&str = "";
  match tags.title() {
    Some(title) => song_name = title,
    None => println!("No title set")
  }

  (song_name.into(), "Placeholder album art location".into())
}
